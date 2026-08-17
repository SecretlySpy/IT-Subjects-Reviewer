/**
 * subject-data-tests.js
 *
 * Content-integrity tests for the React study platform's subject data.
 *
 * The datasets are TypeScript modules that use the "@/" path alias, so they are
 * bundled once with Vite's programmatic API into a temporary ESM file and then
 * imported. Nothing in the repository is modified.
 *
 * Run with:
 *   node subject-data-tests.js
 */

// Load file-system helpers for the temporary bundle directory.
import fs from "node:fs";

// Load path helpers for Windows, macOS, and Linux compatibility.
import path from "node:path";

// Convert this ES module's URL into a filesystem path.
import { fileURLToPath, pathToFileURL } from "node:url";

// Load Vite's programmatic build API to resolve TypeScript and the "@/" alias.
import { build } from "vite";

// Resolve the repository root from this module's location.
const repositoryRoot = path.dirname(fileURLToPath(import.meta.url));

// Keep the compiled bundle out of the tracked tree.
const outDir = path.join(repositoryRoot, "node_modules", ".tmp", "subject-data-tests");

/**
 * Record a passing condition or throw a precise failure.
 * @param {boolean} condition - Assertion result.
 * @param {string} message - Behavior being verified.
 * @returns {void}
 */
function assert(condition, message) {
  if (!condition) {
    throw new Error(`FAIL: ${message}`);
  }
  console.log(`PASS: ${message}`);
}

/**
 * Bundle the subject barrel file and import the resulting module.
 * @returns {Promise<object>} The evaluated subjectsData map.
 */
async function loadSubjectsData() {
  await build({
    configFile: false,
    logLevel: "error",
    resolve: {
      alias: { "@": path.resolve(repositoryRoot, "src") },
    },
    build: {
      ssr: path.resolve(repositoryRoot, "src/subjects/index.ts"),
      outDir,
      emptyOutDir: true,
      minify: false,
      rollupOptions: { output: { entryFileNames: "subjects.mjs" } },
    },
  });
  const bundle = await import(pathToFileURL(path.join(outDir, "subjects.mjs")).href);
  return bundle.subjectsData;
}

/**
 * Report duplicate values within a list of identifiers.
 * @param {string[]} values - Identifiers to inspect.
 * @returns {string[]} The duplicated identifiers.
 */
function duplicates(values) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
}

/**
 * Run every integrity check for one subject dataset.
 * @param {string} key - Subject key inside subjectsData.
 * @param {object} subject - The subject module namespace.
 * @returns {void}
 */
function checkSubject(key, subject) {
  const { subjectMeta, topics, flashcards, questions, glossary } = subject;

  assert(
    subjectMeta.id === key,
    `${key}: subjectMeta.id matches its key in subjectsData`
  );
  assert(
    subjectMeta.topicCount === topics.length,
    `${key}: advertised topicCount (${subjectMeta.topicCount}) matches the ${topics.length} topics that exist`
  );
  assert(
    topics.every((topic) => topic.subjectId === subjectMeta.id),
    `${key}: every topic declares the correct subjectId`
  );

  const topicIds = topics.map((topic) => topic.id);
  assert(duplicates(topicIds).length === 0, `${key}: topic identifiers are unique`);
  assert(
    duplicates(flashcards.map((card) => card.id)).length === 0,
    `${key}: flashcard identifiers are unique`
  );
  assert(
    duplicates(questions.map((question) => question.id)).length === 0,
    `${key}: question identifiers are unique`
  );
  assert(
    duplicates(glossary.map((term) => term.id)).length === 0,
    `${key}: glossary identifiers are unique`
  );

  const orders = topics.map((topic) => topic.order);
  assert(
    duplicates(orders).length === 0,
    `${key}: topic order values are unique so the syllabus cannot tie`
  );

  const topicIdSet = new Set(topicIds);
  const orphanCards = flashcards.filter((card) => !topicIdSet.has(card.topicId));
  assert(
    orphanCards.length === 0,
    `${key}: every flashcard points at a real topic${
      orphanCards.length ? ` (bad: ${orphanCards.map((card) => card.id).join(", ")})` : ""
    }`
  );

  const orphanQuestions = questions.filter((question) => !topicIdSet.has(question.topicId));
  assert(
    orphanQuestions.length === 0,
    `${key}: every question points at a real topic${
      orphanQuestions.length
        ? ` (bad: ${orphanQuestions.map((question) => question.id).join(", ")})`
        : ""
    }`
  );

  const orphanGlossary = glossary.filter((term) =>
    term.topicIds.some((topicId) => !topicIdSet.has(topicId))
  );
  assert(
    orphanGlossary.length === 0,
    `${key}: every glossary term points at real topics${
      orphanGlossary.length ? ` (bad: ${orphanGlossary.map((term) => term.id).join(", ")})` : ""
    }`
  );

  const termIdSet = new Set(glossary.map((term) => term.id));
  const brokenRelations = topics.filter((topic) =>
    topic.relatedTermIds.some((termId) => !termIdSet.has(termId))
  );
  assert(
    brokenRelations.length === 0,
    `${key}: every topic's relatedTermIds resolve to glossary terms${
      brokenRelations.length
        ? ` (bad: ${brokenRelations.map((topic) => topic.id).join(", ")})`
        : ""
    }`
  );

  const badAnswers = questions.filter(
    (question) =>
      !Array.isArray(question.correct) ||
      question.correct.length === 0 ||
      question.correct.some(
        (index) => !Number.isInteger(index) || index < 0 || index >= question.options.length
      )
  );
  assert(
    badAnswers.length === 0,
    `${key}: every question's correct indexes fall inside its options${
      badAnswers.length ? ` (bad: ${badAnswers.map((question) => question.id).join(", ")})` : ""
    }`
  );

  const ambiguous = questions.filter(
    (question) => new Set(question.options).size !== question.options.length
  );
  assert(
    ambiguous.length === 0,
    `${key}: no question repeats an option${
      ambiguous.length ? ` (bad: ${ambiguous.map((question) => question.id).join(", ")})` : ""
    }`
  );

  const missingExplanations = questions.filter(
    (question) => typeof question.explanation !== "string" || !question.explanation.trim()
  );
  assert(
    missingExplanations.length === 0,
    `${key}: every question explains its answer`
  );

  const emptyProfessorMode = topics.filter(
    (topic) =>
      !topic.professorMode.eli5.trim() ||
      !topic.professorMode.deepDive.trim() ||
      !topic.professorMode.analogy.trim()
  );
  assert(
    emptyProfessorMode.length === 0,
    `${key}: every topic supplies an ELI5, a deep dive, and an analogy`
  );

  // Each diagram type maps to the visualAidData field its renderer requires.
  // A new diagram must be registered here, in NetworkDiagrams.tsx (or
  // TopicVisuals.tsx), and in the professor-mode dispatcher.
  const diagramFields = {
    "tcp-handshake": "steps",
    "ospf-areas": "areas",
    "eia-hub-spoke": "nodes",
    "android-lifecycle": "nodes",
    "sensor-fusion": "sensors",
    "thumb-zone": "zones",
    "path-chain": "chain",
    "layer-stack": "layers",
    "tree-hierarchy": "levels",
    "field-layout": "fields",
    "weighted-graph": "edges",
    "actor-flow": "messages",
    "radio-range": "stations",
  };
  const unrenderableAids = topics.filter((topic) => {
    const { visualAidType, visualAidData } = topic.professorMode;
    if (visualAidType === "table") {
      return (
        !Array.isArray(visualAidData.headers) ||
        visualAidData.headers.length === 0 ||
        !Array.isArray(visualAidData.rows) ||
        visualAidData.rows.length === 0 ||
        visualAidData.rows.some((row) => row.length !== visualAidData.headers.length)
      );
    }
    if (visualAidType === "diagram") {
      const field = diagramFields[visualAidData.type];
      return !field || !Array.isArray(visualAidData[field]) || visualAidData[field].length === 0;
    }
    return visualAidType !== "interactive" || visualAidData.type !== "safe-form-lab";
  });
  assert(
    unrenderableAids.length === 0,
    `${key}: every topic has a populated visual aid with a registered renderer${
      unrenderableAids.length
        ? ` (bad: ${unrenderableAids.map((topic) => topic.id).join(", ")})`
        : ""
    }`
  );

  const invalidLessonContent = topics.filter((topic) => {
    const hasRichContent = topic.learningObjectives || topic.lessonBlocks || topic.sources;
    if (!hasRichContent) return false;
    const validBlocks = Array.isArray(topic.lessonBlocks) && topic.lessonBlocks.length > 0 &&
      topic.lessonBlocks.every((block) => {
        if (block.kind === "paragraph") return typeof block.text === "string" && block.text.trim();
        if (block.kind === "list") return Array.isArray(block.items) && block.items.length > 0;
        if (block.kind === "code") {
          return ["html", "javascript"].includes(block.language) &&
            typeof block.code === "string" && block.code.trim() &&
            typeof block.caption === "string" && block.caption.trim();
        }
        return block.kind === "callout" &&
          ["note", "warning", "security"].includes(block.tone) &&
          typeof block.text === "string" && block.text.trim();
      });
    const validSources = Array.isArray(topic.sources) && topic.sources.length > 0 &&
      topic.sources.every((source) =>
        typeof source.title === "string" && source.title.trim() &&
        typeof source.publisher === "string" && source.publisher.trim() &&
        /^https:\/\//.test(source.url)
      );
    return !Array.isArray(topic.learningObjectives) || !topic.learningObjectives.length ||
      !validBlocks || !validSources;
  });
  assert(
    invalidLessonContent.length === 0,
    `${key}: optional rich lessons have objectives, renderable blocks, and HTTPS sources${
      invalidLessonContent.length
        ? ` (bad: ${invalidLessonContent.map((topic) => topic.id).join(", ")})`
        : ""
    }`
  );
}

/**
 * Execute the complete subject-data suite.
 * @returns {Promise<void>}
 */
async function main() {
  console.log("IT Subjects Reviewer — Study Platform Data Tests");
  const subjectsData = await loadSubjectsData();
  const keys = Object.keys(subjectsData);
  assert(keys.length > 0, "at least one subject is registered");

  for (const key of keys) {
    console.log(`\n──── ${key} ────`);
    checkSubject(key, subjectsData[key]);
  }

  // Glossary identifiers are surfaced together in the global search dialog.
  const globalTermIds = keys.flatMap((key) =>
    subjectsData[key].glossary.map((term) => term.id)
  );
  console.log("\n──── cross-subject ────");
  assert(
    duplicates(globalTermIds).length === 0,
    `glossary identifiers are unique across all subjects (global search uses them as React keys)`
  );

  fs.rmSync(outDir, { recursive: true, force: true });
  console.log("\nSUBJECT_DATA_SUITE_PASSED");
}

// Run the suite and allow thrown assertions to produce a nonzero exit code.
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
