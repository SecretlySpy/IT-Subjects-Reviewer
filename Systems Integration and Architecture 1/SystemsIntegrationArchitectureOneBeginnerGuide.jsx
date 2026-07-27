/**
 * React reference implementation for the Systems Integration and Architecture 1 reviewer.
 *
 * This component expects React and Tailwind CSS in the host project. The repository's
 * directly runnable implementation remains index.html; this file is provided for teams
 * that want to embed the same shared data in an existing React application.
 */

// Import the React hooks used by the interactive sections.
import React, { useEffect, useMemo, useState } from "react";

// Load data.js for its deliberate globalThis.reviewerData side effect.
import "./data.js";

// Read the shared course contract once at module evaluation time.
const data = globalThis.reviewerData || {};

// Destructure every dataset consumed by this React presentation.
const {
  course = {},
  modules = [],
  topics = [],
  glossaryEntries = [],
  flashcards = [],
  practiceTests = [],
  blueprintStages = [],
  modelLayers = [],
  scenarios = [],
  studySteps = [],
  references = [],
} = data;

// Map topic tones to Tailwind border and text colors.
const toneMap = {
  blue: "border-blue-500 text-blue-700 dark:text-blue-300",
  violet: "border-violet-500 text-violet-700 dark:text-violet-300",
  cyan: "border-cyan-500 text-cyan-700 dark:text-cyan-300",
  amber: "border-amber-500 text-amber-700 dark:text-amber-300",
  green: "border-emerald-500 text-emerald-700 dark:text-emerald-300",
  rose: "border-rose-500 text-rose-700 dark:text-rose-300",
};

/**
 * Render a compact semantic label.
 * @param {{children: React.ReactNode}} props - Chip content.
 * @returns {React.ReactElement} Styled label.
 */
function Chip({ children }) {
  return (
    <span className="inline-flex rounded-full border border-stone-300 bg-white px-2.5 py-1 text-xs font-bold text-teal-700 dark:border-stone-700 dark:bg-stone-900 dark:text-teal-300">
      {children}
    </span>
  );
}

/**
 * Render a reusable bordered surface.
 * @param {{children: React.ReactNode, className?: string}} props - Surface content and optional classes.
 * @returns {React.ReactElement} Styled panel.
 */
function Panel({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-stone-300 bg-white p-5 shadow-sm dark:border-stone-700 dark:bg-stone-900 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Safely read stored JSON without breaking server-side rendering or private browsing.
 * @param {string} key - Local-storage key.
 * @param {unknown} fallback - Safe fallback value.
 * @returns {unknown} Parsed value or fallback.
 */
function readStoredJson(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

/**
 * Render one expanded topic guide.
 * @param {{topic: object, studied: boolean, onToggle: Function, onClose: Function}} props - Topic interaction contract.
 * @returns {React.ReactElement} Expanded topic content.
 */
function TopicDetail({ topic, studied, onToggle, onClose }) {
  const module = modules.find((entry) => entry.id === topic.moduleId);
  return (
    <Panel className="col-span-full scroll-mt-24 border-teal-500">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Chip>{module?.label} • {topic.unit}</Chip>
          <h3 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold text-teal-950 dark:text-teal-100">
            {topic.title}
          </h3>
          <p className="max-w-4xl text-lg text-stone-600 dark:text-stone-300">{topic.beginner}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-stone-300 px-3 py-2 font-bold dark:border-stone-700"
          aria-label="Close topic guide"
        >
          ✕
        </button>
      </div>

      <div className="my-5 rounded-xl bg-amber-50 p-4 text-amber-950 dark:bg-amber-950/30 dark:text-amber-100">
        <strong>Relatable example:</strong> {topic.example}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h4 className="font-bold text-teal-950 dark:text-teal-100">Key points</h4>
          <ul className="list-disc space-y-2 pl-5 text-stone-700 dark:text-stone-300">
            {topic.keyPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-teal-950 dark:text-teal-100">Important terms</h4>
          <div className="flex flex-wrap gap-2">
            {topic.terms.map((term) => <Chip key={term}>{term}</Chip>)}
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr>
              {topic.compare.headers.map((header) => (
                <th key={header} className="border border-stone-300 bg-stone-100 p-3 dark:border-stone-700 dark:bg-stone-800">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {topic.compare.rows.map((row) => (
              <tr key={row.join("|")}>
                {row.map((cell) => <td key={cell} className="border border-stone-300 p-3 dark:border-stone-700">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {topic.flow.map(([label, text]) => (
          <div key={label} className="rounded-xl border border-stone-300 bg-stone-50 p-3 dark:border-stone-700 dark:bg-stone-800">
            <strong className="block text-teal-700 dark:text-teal-300">{label}</strong>
            <span className="text-sm text-stone-600 dark:text-stone-300">{text}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="mt-6 rounded-xl bg-teal-800 px-4 py-2.5 font-bold text-white hover:bg-teal-700"
      >
        {studied ? "Mark unstudied" : "Mark studied"}
      </button>
    </Panel>
  );
}

/**
 * Render topic filters, completion, cards, and expanded guides.
 * @returns {React.ReactElement} Topic dashboard section.
 */
function TopicDashboard() {
  const validIds = useMemo(() => new Set(topics.map((topic) => topic.id)), []);
  const [filter, setFilter] = useState("All");
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [studied, setStudied] = useState(() => {
    const stored = readStoredJson("sia1Studied", []);
    return new Set(Array.isArray(stored) ? stored.filter((id) => validIds.has(id)) : []);
  });

  const visibleTopics = useMemo(
    () => (filter === "All" ? topics : topics.filter((topic) => topic.moduleId === filter)),
    [filter]
  );

  useEffect(() => {
    try {
      window.localStorage.setItem("sia1Studied", JSON.stringify([...studied]));
    } catch {
      // Keep the component usable when the host blocks storage.
    }
  }, [studied]);

  function toggleStudied(topicId) {
    setStudied((current) => {
      const next = new Set(current);
      if (next.has(topicId)) next.delete(topicId);
      else next.add(topicId);
      return next;
    });
  }

  const selectedTopic = topics.find((topic) => topic.id === selectedTopicId);
  const percent = topics.length ? Math.round((studied.size / topics.length) * 100) : 0;

  return (
    <section id="dashboard" className="scroll-mt-24 py-16">
      <Chip>01 • Learn</Chip>
      <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold text-teal-950 dark:text-teal-100">
        Topic dashboard
      </h2>
      <p className="max-w-3xl text-stone-600 dark:text-stone-300">
        Open a guide, connect its example to the main idea, and mark it studied when you can explain it.
      </p>

      <Panel className="my-5">
        <div className="flex justify-between gap-4 font-bold">
          <span>Your progress</span>
          <span>{studied.size}/{topics.length} • {percent}%</span>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
          <div className="h-full rounded-full bg-teal-600" style={{ width: `${percent}%` }} />
        </div>
      </Panel>

      <div className="mb-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("All")}
          aria-pressed={filter === "All"}
          className={`rounded-full border px-3 py-2 font-bold ${filter === "All" ? "border-teal-600 bg-teal-50 text-teal-800 dark:bg-teal-950/30 dark:text-teal-200" : "border-stone-300 dark:border-stone-700"}`}
        >
          All modules
        </button>
        {modules.map((module) => (
          <button
            key={module.id}
            type="button"
            onClick={() => setFilter(module.id)}
            aria-pressed={filter === module.id}
            className={`rounded-full border px-3 py-2 font-bold ${filter === module.id ? "border-teal-600 bg-teal-50 text-teal-800 dark:bg-teal-950/30 dark:text-teal-200" : "border-stone-300 dark:border-stone-700"}`}
          >
            {module.label} {module.title}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleTopics.map((topic) => {
          const module = modules.find((entry) => entry.id === topic.moduleId);
          return (
            <article
              key={topic.id}
              className={`flex min-h-72 flex-col rounded-2xl border-l-4 bg-white p-5 shadow-sm dark:bg-stone-900 ${toneMap[topic.color]}`}
            >
              <div className="mb-3 flex flex-wrap justify-between gap-2">
                <Chip>{module?.label} • {topic.unit}</Chip>
                <span className="text-xs font-bold">{studied.has(topic.id) ? "✓ Studied" : "Not studied"}</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-teal-950 dark:text-teal-100">{topic.title}</h3>
              <p className="text-stone-600 dark:text-stone-300">{topic.subtitle}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTopicId(topic.id)}
                  className="rounded-xl bg-teal-800 px-3 py-2 font-bold text-white"
                >
                  Open guide
                </button>
                <button
                  type="button"
                  onClick={() => toggleStudied(topic.id)}
                  className="rounded-xl border border-stone-300 px-3 py-2 font-bold dark:border-stone-700"
                >
                  {studied.has(topic.id) ? "Mark unstudied" : "Mark studied"}
                </button>
              </div>
            </article>
          );
        })}

        {selectedTopic && (
          <TopicDetail
            topic={selectedTopic}
            studied={studied.has(selectedTopic.id)}
            onToggle={() => toggleStudied(selectedTopic.id)}
            onClose={() => setSelectedTopicId(null)}
          />
        )}
      </div>
    </section>
  );
}

/**
 * Render the four-stage EIA blueprint explorer.
 * @returns {React.ReactElement} Blueprint section.
 */
function BlueprintExplorer() {
  const [index, setIndex] = useState(0);
  const stage = blueprintStages[index];

  return (
    <section id="blueprint" className="scroll-mt-24 py-16">
      <Chip>02 • Blueprint</Chip>
      <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold text-teal-950 dark:text-teal-100">
        EIA blueprint explorer
      </h2>
      <div className="grid gap-4 lg:grid-cols-[0.42fr_1fr]">
        <div className="grid gap-2" role="tablist" aria-label="Blueprint stages">
          {blueprintStages.map((entry, stageIndex) => (
            <button
              key={entry.id}
              type="button"
              role="tab"
              aria-selected={index === stageIndex}
              onClick={() => setIndex(stageIndex)}
              className={`rounded-xl border p-4 text-left ${index === stageIndex ? "border-teal-600 bg-teal-50 dark:bg-teal-950/30" : "border-stone-300 dark:border-stone-700"}`}
            >
              <strong>{stageIndex + 1}. {entry.title}</strong>
              <small className="block text-stone-500 dark:text-stone-400">{entry.question}</small>
            </button>
          ))}
        </div>
        <Panel>
          <Chip>Stage {index + 1} of {blueprintStages.length}</Chip>
          <h3 className="mt-3 text-2xl font-bold text-teal-950 dark:text-teal-100">{stage.title}</h3>
          <p className="text-lg text-stone-600 dark:text-stone-300">{stage.summary}</p>
          <ul className="list-disc pl-5">
            {stage.includes.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="rounded-xl bg-amber-50 p-4 text-amber-950 dark:bg-amber-950/30 dark:text-amber-100">
            <strong>Example:</strong> {stage.example}
          </div>
        </Panel>
      </div>
    </section>
  );
}

/**
 * Render model-layer tabs and a keyboard-friendly matching prompt.
 * @returns {React.ReactElement} Model lens section.
 */
function ModelLens() {
  const matches = [
    { construct: "Information Concept", layerId: "conceptual" },
    { construct: "Data Subject", layerId: "conceptual" },
    { construct: "Information View", layerId: "logical" },
    { construct: "Data Representation", layerId: "logical" },
    { construct: "Information Store", layerId: "physical" },
    { construct: "Physical Data Object", layerId: "physical" },
  ];
  const [layerIndex, setLayerIndex] = useState(0);
  const [matchIndex, setMatchIndex] = useState(0);
  const [selection, setSelection] = useState(null);
  const layer = modelLayers[layerIndex];
  const item = matches[matchIndex];

  return (
    <section id="models" className="scroll-mt-24 py-16">
      <Chip>03 • Model lens</Chip>
      <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold text-teal-950 dark:text-teal-100">
        Conceptual, logical, and physical
      </h2>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Model layers">
            {modelLayers.map((entry, index) => (
              <button
                key={entry.id}
                type="button"
                role="tab"
                aria-selected={layerIndex === index}
                onClick={() => setLayerIndex(index)}
                className={`rounded-xl border px-3 py-2 font-bold ${layerIndex === index ? "border-teal-600 bg-teal-50 text-teal-800 dark:bg-teal-950/30 dark:text-teal-200" : "border-stone-300 dark:border-stone-700"}`}
              >
                {entry.label}
              </button>
            ))}
          </div>
          <h3 className="mt-5 text-2xl font-bold text-teal-950 dark:text-teal-100">{layer.question}</h3>
          <p className="text-stone-600 dark:text-stone-300">{layer.description}</p>
          <div className="flex flex-wrap gap-2">
            {layer.constructs.map((construct) => <Chip key={construct}>{construct}</Chip>)}
          </div>
          <p className="mt-4 rounded-xl bg-stone-100 p-4 dark:bg-stone-800">
            <strong>Example:</strong> {layer.example}
          </p>
        </Panel>

        <Panel>
          <Chip>Layer match • {matchIndex + 1}/{matches.length}</Chip>
          <h3 className="mt-4 text-2xl font-bold text-teal-950 dark:text-teal-100">
            Where does “{item.construct}” belong?
          </h3>
          <div className="grid gap-2">
            {modelLayers.map((entry) => {
              const correct = selection !== null && entry.id === item.layerId;
              const incorrect = selection === entry.id && entry.id !== item.layerId;
              return (
                <button
                  key={entry.id}
                  type="button"
                  disabled={selection !== null}
                  onClick={() => setSelection(entry.id)}
                  className={`rounded-xl border p-3 text-left font-bold ${correct ? "border-emerald-600 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200" : incorrect ? "border-rose-600 bg-rose-50 text-rose-800 dark:bg-rose-950/30 dark:text-rose-200" : "border-stone-300 dark:border-stone-700"}`}
                >
                  {entry.label}
                </button>
              );
            })}
          </div>
          {selection !== null && (
            <>
              <p className="mt-4 rounded-xl bg-stone-100 p-4 dark:bg-stone-800">
                <strong>{selection === item.layerId ? "Correct!" : "Not quite."}</strong>{" "}
                {item.construct} belongs to the {item.layerId} layer.
              </p>
              <button
                type="button"
                onClick={() => {
                  setMatchIndex((matchIndex + 1) % matches.length);
                  setSelection(null);
                }}
                className="rounded-xl bg-teal-800 px-4 py-2.5 font-bold text-white"
              >
                {matchIndex === matches.length - 1 ? "Start again" : "Next construct →"}
              </button>
            </>
          )}
        </Panel>
      </div>
    </section>
  );
}

/**
 * Render every scenario challenge with category filtering and explanations.
 * @returns {React.ReactElement} Scenario lab section.
 */
function ScenarioLab() {
  const categories = useMemo(() => ["All", ...new Set(scenarios.map((scenario) => scenario.category))], []);
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(0);
  const [selection, setSelection] = useState(null);
  const [completed, setCompleted] = useState(() => {
    const stored = readStoredJson("sia1ScenarioProgress", { completed: [] });
    return new Set(Array.isArray(stored?.completed) ? stored.completed : []);
  });
  const available = useMemo(
    () => (filter === "All" ? scenarios : scenarios.filter((scenario) => scenario.category === filter)),
    [filter]
  );
  const scenario = available[index];

  useEffect(() => {
    try {
      window.localStorage.setItem(
        "sia1ScenarioProgress",
        JSON.stringify({ completed: [...completed] })
      );
    } catch {
      // Preserve in-memory progress when storage is unavailable.
    }
  }, [completed]);

  function choose(optionIndex) {
    setSelection(optionIndex);
    setCompleted((current) => new Set([...current, scenario.id]));
  }

  return (
    <section id="scenarios" className="scroll-mt-24 py-16">
      <Chip>04 • Apply</Chip>
      <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold text-teal-950 dark:text-teal-100">
        Enterprise decision lab
      </h2>
      <div className="mb-5 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => {
              setFilter(category);
              setIndex(0);
              setSelection(null);
            }}
            className={`rounded-full border px-3 py-2 font-bold ${filter === category ? "border-teal-600 bg-teal-50 text-teal-800 dark:bg-teal-950/30 dark:text-teal-200" : "border-stone-300 dark:border-stone-700"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <Panel className="mx-auto max-w-4xl">
        <div className="flex flex-wrap gap-2">
          <Chip>{scenario.category}</Chip>
          <Chip>{index + 1}/{available.length}</Chip>
          <Chip>{completed.size}/{scenarios.length} completed</Chip>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-teal-950 dark:text-teal-100">{scenario.prompt}</h3>
        <div className="grid gap-2">
          {scenario.options.map((option, optionIndex) => {
            const correct = selection !== null && optionIndex === scenario.answer;
            const incorrect = selection === optionIndex && optionIndex !== scenario.answer;
            return (
              <button
                key={option}
                type="button"
                disabled={selection !== null}
                onClick={() => choose(optionIndex)}
                className={`rounded-xl border p-3 text-left font-bold ${correct ? "border-emerald-600 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200" : incorrect ? "border-rose-600 bg-rose-50 text-rose-800 dark:bg-rose-950/30 dark:text-rose-200" : "border-stone-300 dark:border-stone-700"}`}
              >
                {String.fromCharCode(65 + optionIndex)}. {option}
              </button>
            );
          })}
        </div>
        {selection !== null && (
          <div className="mt-4">
            <p className="rounded-xl bg-stone-100 p-4 dark:bg-stone-800">
              <strong>{selection === scenario.answer ? "Good decision!" : "Review the clue."}</strong>{" "}
              {scenario.explanation}
            </p>
            <button
              type="button"
              onClick={() => {
                setIndex((index + 1) % available.length);
                setSelection(null);
              }}
              className="rounded-xl bg-teal-800 px-4 py-2.5 font-bold text-white"
            >
              {index === available.length - 1 ? "Restart category" : "Next scenario →"}
            </button>
          </div>
        )}
      </Panel>
    </section>
  );
}

/**
 * Render the flashcard deck with topic filtering and keyboard-safe buttons.
 * @returns {React.ReactElement} Flashcard panel.
 */
function Flashcards() {
  const topicsForCards = useMemo(() => ["All", ...new Set(flashcards.map((card) => card.topic))], []);
  const [topic, setTopic] = useState("All");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cards = useMemo(
    () => (topic === "All" ? flashcards : flashcards.filter((card) => card.topic === topic)),
    [topic]
  );
  const normalizedIndex = cards.length ? ((index % cards.length) + cards.length) % cards.length : 0;
  const card = cards[normalizedIndex];

  function move(step) {
    setIndex(normalizedIndex + step);
    setFlipped(false);
  }

  return (
    <Panel>
      <label className="font-bold" htmlFor="react-card-topic">Card topic</label>
      <select
        id="react-card-topic"
        value={topic}
        onChange={(event) => {
          setTopic(event.target.value);
          setIndex(0);
          setFlipped(false);
        }}
        className="mt-2 w-full rounded-xl border border-stone-300 bg-white p-3 dark:border-stone-700 dark:bg-stone-900"
      >
        {topicsForCards.map((entry) => <option key={entry}>{entry}</option>)}
      </select>
      <button
        type="button"
        onClick={() => setFlipped(!flipped)}
        className="my-4 grid min-h-72 w-full place-items-center rounded-2xl border-2 border-teal-600 bg-teal-50 p-6 text-center dark:bg-teal-950/20"
      >
        <span>
          <Chip>{flipped ? "Answer" : "Question"}</Chip>
          <strong className="mt-4 block text-2xl text-teal-950 dark:text-teal-100">
            {card ? (flipped ? card.back : card.front) : "No cards available."}
          </strong>
        </span>
      </button>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span>{cards.length ? normalizedIndex + 1 : 0}/{cards.length}</span>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} className="rounded-xl border border-stone-300 px-3 py-2 font-bold dark:border-stone-700">← Previous</button>
          <button type="button" onClick={() => move(1)} className="rounded-xl bg-teal-800 px-3 py-2 font-bold text-white">Next →</button>
        </div>
      </div>
    </Panel>
  );
}

/**
 * Render one selected twenty-question module test.
 * @returns {React.ReactElement} Quiz panel.
 */
function ModuleTest() {
  const [testIndex, setTestIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const test = practiceTests[testIndex];
  const correct = submitted
    ? test.questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0)
    : 0;

  return (
    <Panel>
      <label className="font-bold" htmlFor="react-test-select">Module test</label>
      <select
        id="react-test-select"
        value={testIndex}
        onChange={(event) => {
          setTestIndex(Number(event.target.value));
          setAnswers({});
          setSubmitted(false);
        }}
        className="mt-2 w-full rounded-xl border border-stone-300 bg-white p-3 dark:border-stone-700 dark:bg-stone-900"
      >
        {practiceTests.map((entry, index) => <option key={entry.title} value={index}>{entry.title}</option>)}
      </select>
      {submitted && <p className="mt-4 text-xl font-bold text-teal-700 dark:text-teal-300">{correct}/{test.questions.length} correct</p>}
      <div className="mt-4 max-h-[48rem] space-y-4 overflow-y-auto pr-1">
        {test.questions.map((question, questionIndex) => (
          <article key={question.q} className="rounded-xl border border-stone-300 p-4 dark:border-stone-700">
            <h4 className="font-bold">{questionIndex + 1}. {question.q}</h4>
            <div className="grid gap-2">
              {question.options.map((option, optionIndex) => {
                const selected = answers[questionIndex] === optionIndex;
                const correctOption = submitted && optionIndex === question.answer;
                const incorrectOption = submitted && selected && optionIndex !== question.answer;
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={submitted}
                    aria-pressed={selected}
                    onClick={() => setAnswers({ ...answers, [questionIndex]: optionIndex })}
                    className={`rounded-xl border p-3 text-left ${correctOption ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30" : incorrectOption ? "border-rose-600 bg-rose-50 dark:bg-rose-950/30" : selected ? "border-teal-600 bg-teal-50 dark:bg-teal-950/30" : "border-stone-300 dark:border-stone-700"}`}
                  >
                    {String.fromCharCode(65 + optionIndex)}. {option}
                  </button>
                );
              })}
            </div>
            {submitted && <p className="mt-3 rounded-lg bg-stone-100 p-3 text-sm dark:bg-stone-800">{question.explain}</p>}
          </article>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={() => setSubmitted(true)} className="rounded-xl bg-teal-800 px-4 py-2.5 font-bold text-white">Submit test</button>
        <button
          type="button"
          onClick={() => {
            setAnswers({});
            setSubmitted(false);
          }}
          className="rounded-xl border border-stone-300 px-4 py-2.5 font-bold dark:border-stone-700"
        >
          Reset
        </button>
      </div>
    </Panel>
  );
}

/**
 * Render flashcards and module tests side by side.
 * @returns {React.ReactElement} Practice section.
 */
function PracticeZone() {
  return (
    <section id="practice" className="scroll-mt-24 py-16">
      <Chip>05 • Retrieve</Chip>
      <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold text-teal-950 dark:text-teal-100">Practice zone</h2>
      <div className="grid gap-4 xl:grid-cols-2">
        <Flashcards />
        <ModuleTest />
      </div>
    </section>
  );
}

/**
 * Render live glossary search and module filtering.
 * @returns {React.ReactElement} Glossary section.
 */
function Glossary() {
  const [query, setQuery] = useState("");
  const [moduleId, setModuleId] = useState("All");
  const entries = useMemo(
    () =>
      glossaryEntries.filter((entry) => {
        const moduleMatches = moduleId === "All" || entry.moduleId === moduleId;
        const textMatches = `${entry.term} ${entry.definition}`.toLowerCase().includes(query.toLowerCase());
        return moduleMatches && textMatches;
      }),
    [query, moduleId]
  );

  return (
    <section id="glossary" className="scroll-mt-24 py-16">
      <Chip>06 • Reference</Chip>
      <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold text-teal-950 dark:text-teal-100">Searchable glossary</h2>
      <Panel>
        <label className="font-bold" htmlFor="react-glossary-search">Find a term or meaning</label>
        <input
          id="react-glossary-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try governance, metadata, or logical…"
          className="mt-2 w-full rounded-xl border border-stone-300 bg-white p-3 dark:border-stone-700 dark:bg-stone-900"
        />
        <div className="my-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => setModuleId("All")} className="rounded-full border border-stone-300 px-3 py-2 font-bold dark:border-stone-700">All</button>
          {modules.map((module) => (
            <button key={module.id} type="button" onClick={() => setModuleId(module.id)} className="rounded-full border border-stone-300 px-3 py-2 font-bold dark:border-stone-700">{module.label}</button>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {entries.map((entry) => (
            <article key={entry.term} className="rounded-xl border border-stone-300 p-4 dark:border-stone-700">
              <Chip>{entry.moduleLabel}</Chip>
              <h3 className="mt-3 font-bold text-teal-950 dark:text-teal-100">{entry.term}</h3>
              <p className="mb-0 text-sm text-stone-600 dark:text-stone-300">{entry.definition}</p>
            </article>
          ))}
        </div>
      </Panel>

      <Panel className="mt-4">
        <h3 className="font-bold text-teal-950 dark:text-teal-100">Standards and further reading</h3>
        <p className="text-sm text-stone-600 dark:text-stone-300">
          The primary specifications behind Modules 2, 3, and 5. Check a claim at its source before quoting it in an assessment.
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {references.map((reference) => (
            <article key={reference.id} className="rounded-xl border border-stone-300 p-4 dark:border-stone-700">
              <Chip>{(modules.find((module) => module.id === reference.moduleId) || {}).label || "Reference"}</Chip>
              <h4 className="mt-3 font-bold text-teal-950 dark:text-teal-100">
                <a href={reference.url} target="_blank" rel="noopener noreferrer" className="break-words underline">
                  {reference.title}
                </a>
              </h4>
              <p className="mb-1 text-sm font-bold text-stone-700 dark:text-stone-200">{reference.publisher}</p>
              <p className="mb-0 text-sm text-stone-600 dark:text-stone-300">{reference.note}</p>
            </article>
          ))}
        </div>
      </Panel>
    </section>
  );
}

/**
 * Render the complete reusable course reviewer.
 * @returns {React.ReactElement} Application component tree.
 */
export default function SystemsIntegrationArchitectureOneBeginnerGuide() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-stone-100 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <header className="sticky top-0 z-40 border-b border-stone-300 bg-white/90 backdrop-blur dark:border-stone-700 dark:bg-stone-900/90">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
            <a href="#home" className="font-['Space_Grotesk'] font-bold text-teal-950 dark:text-teal-100">
              S1 • {course.title}
            </a>
            <nav className="hidden gap-4 text-sm font-bold md:flex" aria-label="Reviewer navigation">
              <a href="#dashboard">Topics</a>
              <a href="#blueprint">Blueprint</a>
              <a href="#models">Models</a>
              <a href="#scenarios">Scenarios</a>
              <a href="#practice">Practice</a>
              <a href="#glossary">Glossary</a>
            </nav>
            <button
              type="button"
              onClick={() => setDark(!dark)}
              className="rounded-xl border border-stone-300 px-3 py-2 font-bold dark:border-stone-700"
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {dark ? "☀" : "◐"}
            </button>
          </div>
        </header>

        <main id="home" className="mx-auto max-w-7xl px-4">
          <section className="grid min-h-[78vh] items-center gap-8 py-16 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <Chip>{course.moduleLabel} • Beginner reviewer</Chip>
              <h1 className="mt-5 max-w-4xl font-['Space_Grotesk'] text-5xl font-bold tracking-tight text-teal-950 dark:text-teal-100 md:text-7xl">
                See the whole system, one clear idea at a time.
              </h1>
              <p className="max-w-3xl text-xl text-stone-600 dark:text-stone-300">{course.description}</p>
              <a href="#dashboard" className="inline-flex rounded-xl bg-teal-800 px-5 py-3 font-bold text-white">Start reviewing</a>
            </div>
            <Panel className="rotate-1 border-teal-500 bg-teal-50 dark:bg-teal-950/20">
              <h2 className="text-2xl font-bold text-teal-950 dark:text-teal-100">Your learning blueprint</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Business goals", "Trusted information", "Governed technology", "Measurable value"].map((label) => (
                  <div key={label} className="grid min-h-28 place-items-center rounded-xl border border-dashed border-teal-600 bg-white p-4 text-center font-bold dark:bg-stone-900">
                    {label}
                  </div>
                ))}
              </div>
            </Panel>
          </section>

          <TopicDashboard />
          <BlueprintExplorer />
          <ModelLens />
          <ScenarioLab />
          <PracticeZone />
          <Glossary />

          <section className="py-16">
            <Panel>
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-teal-950 dark:text-teal-100">Four-pass study loop</h2>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {studySteps.map((step) => (
                  <article key={step.title} className="border-t-4 border-teal-600 pt-3">
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="text-sm text-stone-600 dark:text-stone-300">{step.text}</p>
                  </article>
                ))}
              </div>
            </Panel>
          </section>
        </main>
      </div>
    </div>
  );
}
