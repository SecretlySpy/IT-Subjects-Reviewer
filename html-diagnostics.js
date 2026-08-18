/**
 * html-diagnostics.js
 *
 * Static and data-contract diagnostics for every directly runnable reviewer.
 *
 * Run with:
 *   node html-diagnostics.js
 */

// Load Node's file-system API for read-only source inspection.
import fs from "node:fs";

// Load Node's path API for platform-safe repository paths.
import path from "node:path";

// Load Node's VM API to parse scripts and evaluate isolated data files.
import vm from "node:vm";

// Convert this ES module's URL into a filesystem path.
import { fileURLToPath } from "node:url";

// Resolve all reviewer locations relative to this script.
const REPOSITORY_ROOT = path.dirname(fileURLToPath(import.meta.url));

// Define reviewer-specific DOM and content expectations in one table.
const REVIEWERS = [
  {
    name: "Networking 2",
    directory: "Networking 2",
    requiredIds: [
      "visual",
      "dashboard",
      "topicCards",
      "topicDetail",
      "practice",
      "flashcardPanel",
      "quizPanel",
      "glossary",
      "glossaryGrid",
    ],
    // Counts are derived from the shipped data.js, not estimated. After any
    // content change, re-derive them before committing or this suite fails.
    expectedCounts: {
      topics: 15,
      glossary: 620,
      flashcards: 627,
      practiceTests: 15,
      questions: 450,
    },
  },
  {
    name: "Systems Integration and Architecture 1",
    directory: "Systems Integration and Architecture 1",
    requiredIds: [
      "dashboard",
      "topicGrid",
      "blueprint",
      "architecturePath",
      "model-lens",
      "modelMatch",
      "scenarios",
      "scenarioCard",
      "practice",
      "flashcardPanel",
      "quizPanel",
      "glossary",
      "glossaryGrid",
      "referenceList",
    ],
    expectedCounts: {
      modules: 15,
      topics: 35,
      glossary: 300,
      glossaryEntries: 300,
      flashcards: 300,
      practiceTests: 15,
      questions: 300,
      blueprintStages: 4,
      modelLayers: 3,
      scenarios: 39,
      studySteps: 4,
      references: 23,
    },
  },
  {
    name: "Mobile Computing",
    directory: "Mobile Computing",
    requiredIds: [
      "dashboard",
      "topicGrid",
      "blueprint",
      "architecturePath",
      "model-lens",
      "modelMatch",
      "scenarios",
      "scenarioCard",
      "practice",
      "flashcardPanel",
      "quizPanel",
      "glossary",
      "glossaryGrid",
    ],
    expectedCounts: {
      modules: 5,
      topics: 16,
      glossary: 54,
      flashcards: 32,
      practiceTests: 5,
      questions: 25,
      blueprintStages: 5,
      modelLayers: 3,
      modelMatchItems: 6,
      scenarios: 9,
      studySteps: 4,
    },
  },
];

/**
 * Print one passing diagnostic.
 * @param {string} message - Human-readable success description.
 * @returns {true} Always true for result aggregation.
 */
function pass(message) {
  console.log(`  ✔ ${message}`);
  return true;
}

/**
 * Print one failing diagnostic.
 * @param {string} message - Human-readable failure description.
 * @returns {false} Always false for result aggregation.
 */
function fail(message) {
  console.error(`  ✘ ${message}`);
  return false;
}

/**
 * Read a required UTF-8 source file.
 * @param {string} filePath - Absolute file path.
 * @returns {string|null} File contents or null when missing.
 */
function readSource(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Required file is missing: ${filePath}`);
    return null;
  }
  return fs.readFileSync(filePath, "utf8");
}

/**
 * Extract the first inline style block.
 * @param {string} html - Reviewer HTML.
 * @returns {string} CSS source or an empty string.
 */
function extractStyleBlock(html) {
  const match = html.match(/<style>([\s\S]*?)<\/style>/i);
  return match ? match[1] : "";
}

/**
 * Extract all inline scripts while excluding external script tags.
 * @param {string} html - Reviewer HTML.
 * @returns {string[]} Inline JavaScript blocks.
 */
function extractInlineScripts(html) {
  const scripts = [];
  const pattern = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match = pattern.exec(html);
  while (match) {
    scripts.push(match[1]);
    match = pattern.exec(html);
  }
  return scripts;
}

/**
 * Extract literal HTML id attributes without confusing data-* attributes.
 * @param {string} html - Reviewer HTML.
 * @returns {string[]} Declared identifiers.
 */
function extractIds(html) {
  return [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
}

/**
 * Confirm the core HTML, CSS, and script-loading contract.
 * @param {object} reviewer - Reviewer configuration.
 * @param {string} html - Reviewer HTML source.
 * @returns {boolean[]} Individual diagnostic outcomes.
 */
function checkHtmlContract(reviewer, html) {
  const results = [];
  const css = extractStyleBlock(html);
  const externalDataIndex = html.indexOf('<script src="data.js"></script>');
  const inlineScriptIndex = html.search(/<script(?![^>]*\bsrc=)[^>]*>/i);
  results.push(
    html.toLowerCase().includes("<!doctype html>")
      ? pass("HTML document has a standards-mode doctype.")
      : fail("HTML document is missing its doctype.")
  );
  results.push(
    css.includes(".hidden")
      ? pass("CSS includes the .hidden utility required by practice tabs.")
      : fail("CSS is missing the .hidden utility.")
  );
  results.push(
    html.includes("if (!entry.isIntersecting) return;")
      ? pass("IntersectionObserver callbacks guard non-intersecting entries.")
      : fail("IntersectionObserver guard is missing.")
  );
  results.push(
    externalDataIndex >= 0 && inlineScriptIndex > externalDataIndex
      ? pass("data.js loads before the inline reviewer runtime.")
      : fail("data.js must load before the inline reviewer runtime.")
  );
  const ids = extractIds(html);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  results.push(
    duplicateIds.length === 0
      ? pass(`All ${ids.length} literal HTML ids are unique.`)
      : fail(`Duplicate HTML ids found: ${duplicateIds.join(", ")}`)
  );
  const missingIds = reviewer.requiredIds.filter((id) => !ids.includes(id));
  results.push(
    missingIds.length === 0
      ? pass("All required section and interaction ids are present.")
      : fail(`Required ids are missing: ${missingIds.join(", ")}`)
  );
  return results;
}

/**
 * Parse every JavaScript block without executing browser code.
 * @param {string} dataSource - Shared data JavaScript.
 * @param {string[]} inlineScripts - Inline reviewer scripts.
 * @returns {boolean} Whether all scripts parse.
 */
function checkJavaScriptSyntax(dataSource, inlineScripts) {
  try {
    new vm.Script(dataSource, { filename: "data.js" });
    inlineScripts.forEach((script, index) => {
      new vm.Script(script, { filename: `index.inline.${index + 1}.js` });
    });
    return pass(`JavaScript syntax is valid across data.js and ${inlineScripts.length} inline script(s).`);
  } catch (error) {
    return fail(`JavaScript syntax error: ${error.message}`);
  }
}

/**
 * Detect top-level lexical declarations that would collide across classic scripts.
 * @param {string} dataSource - Shared data JavaScript.
 * @param {string[]} inlineScripts - Inline reviewer scripts.
 * @returns {boolean} Whether the scripts can share one classic-script scope.
 */
function checkClassicGlobalCollisions(dataSource, inlineScripts) {
  try {
    new vm.Script(
      `${dataSource}\n${inlineScripts.join("\n")}`,
      { filename: "combined-classic-scripts.js" }
    );
    return pass("Classic scripts have no colliding global lexical declarations.");
  } catch (error) {
    return fail(`Classic-script global collision: ${error.message}`);
  }
}

/**
 * Evaluate a data file inside an isolated context.
 * @param {string} source - Shared data source.
 * @returns {object|null} reviewerData or null after evaluation failure.
 */
function evaluateReviewerData(source) {
  const context = {};
  context.globalThis = context;
  try {
    vm.runInNewContext(source, context, {
      filename: "data.js",
      timeout: 2000,
    });
    return context.reviewerData || null;
  } catch (error) {
    fail(`data.js evaluation failed: ${error.message}`);
    return null;
  }
}

/**
 * Count all questions across every practice test.
 * @param {object[]} tests - Practice-test records.
 * @returns {number} Total question count.
 */
function countQuestions(tests) {
  return Array.isArray(tests)
    ? tests.reduce(
        (total, test) => total + (Array.isArray(test.questions) ? test.questions.length : 0),
        0
      )
    : 0;
}

/**
 * Validate required arrays and exact content totals.
 * @param {object} reviewer - Reviewer configuration.
 * @param {object} data - Evaluated reviewer data.
 * @returns {boolean[]} Individual diagnostic outcomes.
 */
function checkContentCounts(reviewer, data) {
  const results = [];
  Object.entries(reviewer.expectedCounts).forEach(([key, expected]) => {
    const actual = key === "questions"
      ? countQuestions(data.practiceTests)
      : Array.isArray(data[key])
        ? data[key].length
        : 0;
    results.push(
      actual === expected
        ? pass(`${key} count is ${actual}.`)
        : fail(`${key} count is ${actual}; expected ${expected}.`)
    );
  });
  return results;
}

/**
 * Validate unique identifiers for any record collection.
 * @param {object[]} records - Records containing id fields.
 * @param {string} label - Human-readable collection name.
 * @returns {boolean} Whether every identifier is present and unique.
 */
function checkUniqueIds(records, label) {
  if (!Array.isArray(records)) return fail(`${label} must be an array.`);
  const ids = records.map((record) => record?.id);
  const invalid = ids.filter((id) => typeof id !== "string" || !id.trim());
  const duplicates = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (invalid.length || duplicates.length) {
    return fail(
      `${label} identifiers are invalid${duplicates.length ? ` or duplicated: ${duplicates.join(", ")}` : "."}`
    );
  }
  return pass(`${label} identifiers are present and unique.`);
}

/**
 * Validate the shared topic, glossary, flashcard, and question shapes.
 * @param {object} data - Evaluated reviewer data.
 * @returns {boolean[]} Individual diagnostic outcomes.
 */
function checkSharedDataShapes(data) {
  const results = [];
  const topicsValid =
    Array.isArray(data.topics) &&
    data.topics.every(
      (topic) =>
        typeof topic.id === "string" &&
        typeof topic.title === "string" &&
        typeof topic.beginner === "string" &&
        Array.isArray(topic.terms) &&
        Array.isArray(topic.keyPoints) &&
        Array.isArray(topic.compare?.headers) &&
        Array.isArray(topic.compare?.rows) &&
        Array.isArray(topic.flow)
    );
  results.push(
    topicsValid
      ? pass("Every topic satisfies the shared presentation contract.")
      : fail("One or more topics violate the shared presentation contract.")
  );
  const glossaryValid =
    Array.isArray(data.glossary) &&
    data.glossary.every(
      (entry) =>
        Array.isArray(entry) &&
        entry.length === 2 &&
        entry.every((value) => typeof value === "string" && value.trim())
    );
  results.push(
    glossaryValid
      ? pass("Every glossary entry is a non-empty [term, definition] tuple.")
      : fail("One or more glossary entries have an invalid shape.")
  );
  const flashcardsValid =
    Array.isArray(data.flashcards) &&
    data.flashcards.every(
      (card) =>
        typeof card.topic === "string" &&
        typeof card.front === "string" &&
        typeof card.back === "string"
    );
  results.push(
    flashcardsValid
      ? pass("Every flashcard has topic, front, and back text.")
      : fail("One or more flashcards have an invalid shape.")
  );
  return results;
}

/**
 * Validate optional objectives, lesson blocks, and source links.
 * @param {object} data - Evaluated reviewer data.
 * @returns {boolean[]} Individual diagnostic outcomes.
 */
// Languages a lesson code block may declare. Extend deliberately: the point of
// the list is that an unrecognised value is reported rather than rendered blind.
const LESSON_CODE_LANGUAGES = [
  "html",
  "javascript",
  "xml",
  "java",
  "bash",
  "http",
  "graphql",
  "sql",
  "json",
  "text",
];

function checkLessonEnhancements(data) {
  const enriched = data.topics.filter(
    (topic) => topic.objectives || topic.lessonBlocks || topic.sources
  );
  if (!enriched.length) return [];
  const results = [];
  // lessonBlocks is optional: a topic may carry objectives and sources alone.
  // When present it must still be non-empty and every block must be renderable.
  const validBlocks = enriched.every(
    (topic) =>
      Array.isArray(topic.objectives) && topic.objectives.length > 0 &&
      (topic.lessonBlocks === undefined ||
        (Array.isArray(topic.lessonBlocks) && topic.lessonBlocks.length > 0)) &&
      (topic.lessonBlocks ?? []).every((block) => {
        if (block.kind === "code") {
          // An allowlist rather than a free string, so a typo still fails, but
          // wide enough for the non-web subjects that now ship code lessons.
          return LESSON_CODE_LANGUAGES.includes(block.language) &&
            typeof block.code === "string" && block.code.trim() &&
            typeof block.caption === "string" && block.caption.trim();
        }
        return block.kind === "callout" &&
          ["note", "warning", "security"].includes(block.tone) &&
          typeof block.text === "string" && block.text.trim();
      })
  );
  results.push(
    validBlocks
      ? pass(`All ${enriched.length} enriched topics define objectives and renderable lesson blocks.`)
      : fail("One or more enriched topics have invalid objectives or lesson blocks.")
  );
  const sourceUrls = enriched.flatMap((topic) => topic.sources || []);
  const validSources = sourceUrls.length > 0 && sourceUrls.every(
    (source) =>
      typeof source.title === "string" && source.title.trim() &&
      typeof source.publisher === "string" && source.publisher.trim() &&
      /^https:\/\//.test(String(source.url))
  );
  results.push(
    validSources
      ? pass(`All ${sourceUrls.length} lesson references use titled HTTPS sources.`)
      : fail("One or more lesson references are incomplete or do not use HTTPS.")
  );
  return results;
}

/**
 * Validate every quiz and scenario answer index.
 * @param {object} data - Evaluated reviewer data.
 * @returns {boolean[]} Individual diagnostic outcomes.
 */
function checkAnswerIndexes(data) {
  const results = [];
  const questions = Array.isArray(data.practiceTests)
    ? data.practiceTests.flatMap((test) => test.questions || [])
    : [];
  const invalidQuestionIndexes = questions
    .map((question, index) => ({ question, index }))
    .filter(
      ({ question }) =>
        !Array.isArray(question.options) ||
        question.options.length < 2 ||
        !Number.isInteger(question.answer) ||
        question.answer < 0 ||
        question.answer >= question.options.length ||
        typeof question.explain !== "string"
    )
    .map(({ index }) => index + 1);
  results.push(
    invalidQuestionIndexes.length === 0
      ? pass(`All ${questions.length} quiz answer indexes and explanations are valid.`)
      : fail(`Invalid quiz questions found at flattened indexes: ${invalidQuestionIndexes.join(", ")}`)
  );
  const ambiguousQuestionIndexes = questions
    .map((question, index) => ({ question, index }))
    .filter(
      ({ question }) =>
        Array.isArray(question.options) &&
        new Set(question.options).size !== question.options.length
    )
    .map(({ index }) => index + 1);
  results.push(
    ambiguousQuestionIndexes.length === 0
      ? pass("No quiz question repeats an option, so exactly one choice can be correct.")
      : fail(`Questions with duplicate options at flattened indexes: ${ambiguousQuestionIndexes.join(", ")}`)
  );
  if (Array.isArray(data.scenarios)) {
    const invalidScenarioIndexes = data.scenarios
      .map((scenario, index) => ({ scenario, index }))
      .filter(
        ({ scenario }) =>
          !Array.isArray(scenario.options) ||
          scenario.options.length < 2 ||
          !Number.isInteger(scenario.answer) ||
          scenario.answer < 0 ||
          scenario.answer >= scenario.options.length ||
          typeof scenario.explanation !== "string"
      )
      .map(({ index }) => index + 1);
    results.push(
      invalidScenarioIndexes.length === 0
        ? pass(`All ${data.scenarios.length} scenario answer indexes and explanations are valid.`)
        : fail(`Invalid scenarios found at indexes: ${invalidScenarioIndexes.join(", ")}`)
    );
  }
  return results;
}

/**
 * Validate module relationships and advanced interaction data when present.
 * @param {object} data - Evaluated reviewer data.
 * @returns {boolean[]} Individual diagnostic outcomes.
 */
function checkModuleRelationships(data) {
  if (!Array.isArray(data.modules)) return [];
  const results = [];
  const moduleIds = new Set(data.modules.map((module) => module.id));
  const topicModulesValid = data.topics.every((topic) => moduleIds.has(topic.moduleId));
  const scenarioModulesValid = data.scenarios.every((scenario) => moduleIds.has(scenario.moduleId));
  results.push(
    topicModulesValid && scenarioModulesValid
      ? pass("Every topic and scenario references a valid module.")
      : fail("A topic or scenario references an unknown module.")
  );
  const layersValid =
    data.modelLayers.every(
      (layer) =>
        typeof layer.id === "string" &&
        Array.isArray(layer.constructs) &&
        layer.constructs.length > 0
    );
  results.push(
    layersValid
      ? pass("Every model layer defines an identifier and construct list.")
      : fail("One or more model layers are incomplete.")
  );
  results.push(...checkGlossaryGrouping(data));
  results.push(...checkReferences(data));
  return results;
}

/**
 * Confirm the enriched glossary view stays aligned with the tuple glossary and the modules.
 * Every module must own exactly termsPerModule entries so generated tests never run short.
 * @param {object} data - Evaluated reviewer data.
 * @returns {boolean[]} Individual diagnostic outcomes.
 */
function checkGlossaryGrouping(data) {
  if (!Array.isArray(data.glossaryEntries)) return [];
  const results = [];
  const aligned =
    data.glossaryEntries.length === data.glossary.length &&
    data.glossaryEntries.every(
      (entry, index) =>
        entry.term === data.glossary[index][0] &&
        entry.definition === data.glossary[index][1]
    );
  results.push(
    aligned
      ? pass("The enriched glossary view matches the tuple glossary entry for entry.")
      : fail("The enriched glossary view has drifted from the tuple glossary.")
  );
  const perModule = data.modules.map((module) => ({
    module,
    count: data.glossaryEntries.filter((entry) => entry.moduleId === module.id).length,
  }));
  const wrong = perModule.filter((record) => record.count !== data.termsPerModule);
  results.push(
    wrong.length === 0
      ? pass(`Every module owns exactly ${data.termsPerModule} glossary terms.`)
      : fail(
          `Modules with the wrong term count: ${wrong
            .map((record) => `${record.module.label} (${record.count})`)
            .join(", ")}`
        )
  );
  const terms = data.glossary.map(([term]) => term);
  const duplicateTerms = [...new Set(terms.filter((term, index) => terms.indexOf(term) !== index))];
  results.push(
    duplicateTerms.length === 0
      ? pass("Glossary terms are unique.")
      : fail(`Duplicate glossary terms: ${duplicateTerms.join(", ")}`)
  );
  const definitions = data.glossary.map(([, definition]) => definition);
  const duplicateDefinitions = [
    ...new Set(definitions.filter((value, index) => definitions.indexOf(value) !== index)),
  ];
  results.push(
    duplicateDefinitions.length === 0
      ? pass("Glossary definitions are unique, so generated distractors stay distinguishable.")
      : fail(`Duplicate glossary definitions found: ${duplicateDefinitions.length}`)
  );
  return results;
}

/**
 * Confirm every standards reference is uniquely identified and safely linkable.
 * @param {object} data - Evaluated reviewer data.
 * @returns {boolean[]} Individual diagnostic outcomes.
 */
function checkReferences(data) {
  if (!Array.isArray(data.references)) return [];
  const results = [];
  results.push(checkUniqueIds(data.references, "Reference"));
  const moduleIds = new Set(data.modules.map((module) => module.id));
  const invalid = data.references.filter(
    (reference) =>
      !moduleIds.has(reference.moduleId) ||
      typeof reference.title !== "string" ||
      typeof reference.publisher !== "string" ||
      typeof reference.note !== "string" ||
      !/^https:\/\//.test(String(reference.url))
  );
  results.push(
    invalid.length === 0
      ? pass(`All ${data.references.length} references cite a module and an https source.`)
      : fail(`Invalid references: ${invalid.map((reference) => reference.id).join(", ")}`)
  );
  return results;
}

/**
 * Run all checks for one reviewer.
 * @param {object} reviewer - Reviewer configuration.
 * @returns {boolean} Whether the reviewer passed.
 */
function runReviewerDiagnostics(reviewer) {
  console.log("\n────────────────────────────────────────────────────────");
  console.log(`  ${reviewer.name}`);
  console.log("────────────────────────────────────────────────────────");
  const htmlPath = path.join(REPOSITORY_ROOT, reviewer.directory, "index.html");
  const dataPath = path.join(REPOSITORY_ROOT, reviewer.directory, "data.js");
  const html = readSource(htmlPath);
  const dataSource = readSource(dataPath);
  if (html === null || dataSource === null) return false;
  const results = [];
  results.push(...checkHtmlContract(reviewer, html));
  const inlineScripts = extractInlineScripts(html);
  results.push(checkJavaScriptSyntax(dataSource, inlineScripts));
  results.push(checkClassicGlobalCollisions(dataSource, inlineScripts));
  const data = evaluateReviewerData(dataSource);
  if (!data) return false;
  results.push(...checkContentCounts(reviewer, data));
  results.push(checkUniqueIds(data.topics, "Topic"));
  if (Array.isArray(data.scenarios)) {
    results.push(checkUniqueIds(data.scenarios, "Scenario"));
  }
  results.push(...checkSharedDataShapes(data));
  results.push(...checkLessonEnhancements(data));
  results.push(...checkAnswerIndexes(data));
  results.push(...checkModuleRelationships(data));
  return results.every(Boolean);
}

/**
 * Execute every configured reviewer diagnostic and set the process exit code.
 * @returns {void}
 */
function main() {
  console.log("IT Subjects Reviewer — Repository Diagnostics");
  const outcomes = REVIEWERS.map(runReviewerDiagnostics);
  const passed = outcomes.every(Boolean);
  console.log("\n════════════════════════════════════════════════════════");
  console.log(passed ? "✅ All reviewer diagnostics passed." : "⚠️ Reviewer diagnostics failed.");
  console.log("════════════════════════════════════════════════════════");
  process.exitCode = passed ? 0 : 1;
}

// Start diagnostics when this script is executed with Node.
main();
