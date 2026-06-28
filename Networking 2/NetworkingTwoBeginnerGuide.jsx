/*
 * NetworkingTwoBeginnerGuide — React/Tailwind variant of the Networking 2 Reviewer.
 *
 * This is an ALTERNATIVE presentation of the same content as index.html. It is a
 * reference implementation: react, lucide-react and Tailwind are NOT declared in
 * package.json and there is no bundler config in this repo, so it is not part of
 * the shipped build. Keep it in sync with the data.js contract (see AI
 * Documentation Notes.md) if that contract changes.
 */
import React, { useMemo, useState } from "react";
import {
  Activity,
  BookOpen,
  Boxes,
  Cable,
  Globe2,
  Layers,
  Lock,
  Menu,
  MonitorCog,
  Network,
  RadioTower,
  Router,
  Search,
  Server,
  Shield,
  Wifi,
  X,
} from "lucide-react";

// Import for side effect only: data.js assigns globalThis.reviewerData. The empty
// fallbacks below keep the component from crashing if that global is unavailable.
import "./data.js";

const data = globalThis.reviewerData || {};
const topics = data.topics || [];
const glossary = data.glossary || [];
const practiceTests = data.practiceTests || [];
const flashcards = data.flashcards || [];

// topic.id -> icon component, and topic.color -> Tailwind background class.
// These mirror the vanilla app's maps so both variants stay visually consistent;
// both fall back to a neutral default for unknown keys.
const iconMap = {
  intro: Globe2,
  application: Server,
  transport: Boxes,
  reliable_tcp: Activity,
  network_data: Router,
  routing_algorithms: Router,
  isp_bgp: Globe2,
  network_management: MonitorCog,
  datalink_control: Cable,
  lans_ethernet: Network,
  link_virtualization: Layers,
  wireless_networks: Wifi,
  mobile_networks: RadioTower,
  security_basics: Shield,
  ipsec_firewalls: Lock,
};

const toneMap = {
  blue: "bg-blue-600",
  rose: "bg-rose-600",
  green: "bg-emerald-600",
  amber: "bg-amber-600",
  violet: "bg-violet-600",
  cyan: "bg-cyan-600",
};

// --- Presentational primitives (stateless, style-only wrappers) ---

// Small uppercase pill used for labels/eyebrows throughout the page.
function Badge({ children }) {
  return (
    <span className="inline-flex w-fit items-center rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-600">
      {children}
    </span>
  );
}

// Generic rounded panel; `className` lets callers extend layout per use.
function Card({ children, className = "" }) {
  return (
    <article className={`rounded-lg border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
      {children}
    </article>
  );
}

// Topic heading block (icon + unit badge + title + subtitle). `index` provides
// the human-facing 1-based topic number.
function SectionHeader({ topic, index }) {
  const Icon = iconMap[topic.id] || Network;
  return (
    <div className="mb-5 flex items-start gap-4">
      <div className="rounded-lg bg-slate-950 p-3 text-white">
        <Icon size={24} />
      </div>
      <div>
        <Badge>Topic {index + 1} - Unit {topic.unit}</Badge>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{topic.title}</h2>
        <p className="mt-3 max-w-4xl leading-8 text-slate-600">{topic.subtitle}</p>
      </div>
    </div>
  );
}

// Render a topic's comparison table from { headers, rows }. Row/cell keys are
// composed with their index because cell text is not guaranteed unique.
function CompareTable({ compare }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed border-collapse overflow-hidden rounded-lg border border-slate-200 text-sm">
        <thead>
          <tr>
            {compare.headers.map((header) => (
              <th key={header} className="bg-slate-950 p-3 text-left font-black text-white">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compare.rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`} className="border-t border-slate-200">
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="break-words p-3 align-top text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Numbered process-flow grid from an array of [title, text] pairs.
function Flow({ steps }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
      {steps.map(([title, text], index) => (
        <div key={`${title}-${index}`} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white">
            {index + 1}
          </div>
          <h4 className="font-black text-slate-950">{title}</h4>
          <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      ))}
    </div>
  );
}

// Full per-topic section: header, core ideas + key terms, then compare + flow.
// `id={topic.id}` is the in-page anchor that the dashboard cards and nav link to.
function TopicSection({ topic, index }) {
  const Icon = iconMap[topic.id] || Network;
  return (
    <section id={topic.id} className="scroll-mt-24 pt-16">
      <SectionHeader topic={topic} index={index} />
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <Card>
          <div className="mb-4 flex items-center gap-3">
            <div className={`rounded-lg p-2 text-white ${toneMap[topic.color] || "bg-slate-800"}`}>
              <Icon size={22} />
            </div>
            <h3 className="text-2xl font-black text-slate-950">Core ideas</h3>
          </div>
          <p className="mb-4 rounded-lg bg-slate-50 p-4 font-semibold leading-7 text-slate-700">{topic.beginner}</p>
          <ul className="grid gap-3">
            {topic.keyPoints.map((point) => (
              <li key={point} className="rounded-lg border border-slate-200 p-3 leading-7 text-slate-700">
                {point}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-2xl font-black text-slate-950">Key terms</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {topic.terms.map((term) => (
              <span key={term} className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                {term}
              </span>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <h3 className="mb-4 text-2xl font-black text-slate-950">Compare</h3>
          <CompareTable compare={topic.compare} />
        </Card>
        <Card>
          <h3 className="mb-4 text-2xl font-black text-slate-950">Process flow</h3>
          <Flow steps={topic.flow} />
        </Card>
      </div>
    </section>
  );
}

// --- Stateful, interactive sections ---

// Self-contained flashcard reviewer. Owns its topic filter, current index and
// flip state. topicNames is memoized because the deck is static for the
// component's lifetime, so the distinct-topic list never needs recomputing.
function FlashcardDeck() {
  const topicNames = useMemo(() => ["All", ...new Set(flashcards.map((card) => card.topic))], []);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cards = selectedTopic === "All" ? flashcards : flashcards.filter((card) => card.topic === selectedTopic);
  const current = cards[index] || cards[0];

  function setTopic(topic) {
    setSelectedTopic(topic);
    setIndex(0);
    setFlipped(false);
  }

  // Step through the deck with wrap-around (the +cards.length keeps the modulo
  // positive when stepping back from the first card), always showing the front.
  function move(step) {
    if (!cards.length) return;
    setIndex((index + step + cards.length) % cards.length);
    setFlipped(false);
  }

  if (!current) return null;

  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <Badge>Review flashcards</Badge>
          <h3 className="mt-3 text-3xl font-black text-slate-950">Flip cards to review terms</h3>
          <p className="mt-2 max-w-3xl text-slate-600">Filter by topic, answer from memory, then flip to check yourself.</p>
        </div>
        <Badge>
          {index + 1} / {cards.length}
        </Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {topicNames.map((topic) => (
          <button
            key={topic}
            type="button"
            onClick={() => setTopic(topic)}
            className={`rounded-lg px-3 py-2 text-sm font-bold transition ${
              selectedTopic === topic ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setFlipped(!flipped)}
        className="mt-5 min-h-64 w-full rounded-lg border border-slate-200 bg-slate-50 p-6 text-left shadow-inner transition hover:shadow-md"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <Badge>{current.topic}</Badge>
          <span className="text-sm font-bold text-slate-400">Click to flip</span>
        </div>
        <p className="text-sm font-black uppercase tracking-wide text-slate-400">{flipped ? "Answer" : "Question"}</p>
        <h4 className="mt-4 text-2xl font-black leading-tight text-slate-950 md:text-3xl">
          {flipped ? current.back : current.front}
        </h4>
      </button>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={() => move(-1)} className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-bold hover:bg-slate-100">
          Previous
        </button>
        <button type="button" onClick={() => setFlipped(!flipped)} className="rounded-lg bg-slate-950 px-5 py-3 font-bold text-white hover:bg-slate-800">
          Flip card
        </button>
        <button type="button" onClick={() => move(1)} className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-bold hover:bg-slate-100">
          Next
        </button>
      </div>
    </Card>
  );
}

// A single scored test. Tracks per-question answers and a submitted flag; score
// is derived (not stored) so it always reflects current answers. Parent remounts
// this via key={test.title}, which resets state when the user switches tests.
function PracticeTest({ test }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = test.questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0);
  const percent = Math.round((score / test.questions.length) * 100);

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <h3 className="text-2xl font-black text-slate-950">{test.title}</h3>
          <p className="mt-2 max-w-4xl leading-7 text-slate-600">{test.description}</p>
        </div>
        <Badge>{test.questions.length} questions</Badge>
      </div>

      <div className="mt-6 grid gap-4">
        {test.questions.map((question, questionIndex) => {
          const selected = answers[questionIndex];
          const isCorrect = selected === question.answer;
          return (
            <div key={`${question.q}-${questionIndex}`} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h4 className="text-lg font-black text-slate-950">
                {questionIndex + 1}. {question.q}
              </h4>
              <div className="mt-4 grid gap-2 md:grid-cols-2">
                {/* Grading styles only appear after submit: highlight the right
                    answer (showCorrect) and the user's wrong pick (showWrong). */}
                {question.options.map((option, optionIndex) => {
                  const showCorrect = submitted && optionIndex === question.answer;
                  const showWrong = submitted && selected === optionIndex && optionIndex !== question.answer;
                  return (
                    <button
                      key={`${option}-${optionIndex}`}
                      type="button"
                      onClick={() => !submitted && setAnswers({ ...answers, [questionIndex]: optionIndex })}
                      className={`rounded-lg border bg-white p-3 text-left text-sm font-bold transition ${
                        selected === optionIndex ? "border-slate-950" : "border-slate-200 hover:border-slate-400"
                      } ${showCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-900" : ""} ${
                        showWrong ? "border-rose-500 bg-rose-50 text-rose-900" : ""
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <p className={`mt-4 rounded-lg p-3 text-sm leading-6 ${isCorrect ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>
                  <b>{isCorrect ? "Correct." : "Review this."}</b> {question.explain}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col justify-between gap-4 rounded-lg bg-slate-950 p-5 text-white md:flex-row md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-slate-400">Score</p>
          <p className="mt-1 text-3xl font-black">{submitted ? `${score}/${test.questions.length} - ${percent}%` : "Submit to see your score"}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => setSubmitted(true)} className="rounded-lg bg-white px-5 py-3 font-bold text-slate-950 hover:bg-slate-100">
            Submit test
          </button>
          <button type="button" onClick={reset} className="rounded-lg border border-white/25 px-5 py-3 font-bold text-white hover:bg-white/10">
            Reset
          </button>
        </div>
      </div>
    </Card>
  );
}

// Practice center: the flashcard deck plus a test picker. Selecting a test
// re-renders PracticeTest with a new key so each test starts clean.
function PracticeZone() {
  const [testIndex, setTestIndex] = useState(0);
  const selectedTest = practiceTests[testIndex];

  return (
    <section id="practice" className="scroll-mt-24 pt-16">
      <div className="mb-6 flex items-start gap-4">
        <div className="rounded-lg bg-slate-950 p-3 text-white">
          <BookOpen size={24} />
        </div>
        <div>
          <Badge>Practice center</Badge>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Practice tests and review flashcards</h2>
          <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-600">Review every major Networking 2 topic, then test yourself with scored practice exams.</p>
        </div>
      </div>
      <div className="grid gap-5">
        <FlashcardDeck />
        {selectedTest && (
          <>
            <label className="grid gap-2 font-bold text-slate-700 md:max-w-xl">
              Choose a practice test
              <select value={testIndex} onChange={(event) => setTestIndex(Number(event.target.value))} className="rounded-lg border border-slate-300 bg-white p-3">
                {practiceTests.map((test, index) => (
                  <option key={test.title} value={index}>
                    {test.title}
                  </option>
                ))}
              </select>
            </label>
            <PracticeTest key={selectedTest.title} test={selectedTest} />
          </>
        )}
      </div>
    </section>
  );
}

// Searchable glossary. The filtered list is memoized on `query` so it only
// recomputes on input change; matching spans term + definition, and an empty
// query returns the full list.
function GlossaryPanel() {
  const [query, setQuery] = useState("");
  const filteredGlossary = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return glossary;
    return glossary.filter(([term, definition]) => `${term} ${definition}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <section id="glossary" className="scroll-mt-24 pt-16">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Badge>Beginner glossary</Badge>
          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">Search key terms</h2>
        </div>
        <label className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <span className="sr-only">Search glossary</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search TCP, DNS, MAC..."
            className="w-full rounded-lg border border-slate-300 bg-white py-4 pl-11 pr-4 outline-none focus:border-slate-900"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredGlossary.length ? (
          filteredGlossary.map(([term, definition]) => (
            <Card key={term}>
              <h3 className="text-xl font-black text-slate-950">{term}</h3>
              <p className="mt-2 leading-7 text-slate-600">{definition}</p>
            </Card>
          ))
        ) : (
          <Card>
            <h3 className="text-xl font-black text-slate-950">No matching terms</h3>
            <p className="mt-2 leading-7 text-slate-600">Try another networking keyword.</p>
          </Card>
        )}
      </div>
    </section>
  );
}

// Root component: sticky nav (with mobile menu `open` state), hero with live
// data counts, the topic dashboard, every TopicSection, then practice + glossary.
export default function NetworkingTwoBeginnerGuide() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3">
          <a href="#top" className="flex min-w-0 items-center gap-3 font-black text-slate-950">
            <Network className="shrink-0 text-slate-900" />
            <span className="truncate">Networking 2 Guide</span>
          </a>
          <button type="button" className="rounded-lg border border-slate-200 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
          <nav className="hidden items-center gap-2 md:flex">
            <a href="#dashboard" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-950">
              Dashboard
            </a>
            <a href="#practice" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-950">
              Practice
            </a>
            <a href="#glossary" className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white">
              Glossary
            </a>
          </nav>
        </div>
        {open && (
          <nav className="grid gap-1 border-t border-slate-100 bg-white p-4 md:hidden">
            <a onClick={() => setOpen(false)} href="#dashboard" className="rounded-lg px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100">
              Dashboard
            </a>
            <a onClick={() => setOpen(false)} href="#practice" className="rounded-lg px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100">
              Practice
            </a>
            <a onClick={() => setOpen(false)} href="#glossary" className="rounded-lg px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100">
              Glossary
            </a>
          </nav>
        )}
      </header>

      <main id="top" className="mx-auto max-w-7xl px-5 pb-24">
        <section className="grid min-h-[72vh] items-center gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge>Beginner-friendly compilation - Networking 2</Badge>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-7xl">Networking 2 study dashboard</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              Review Internet basics, application protocols, transport reliability, IP, routing, management, LANs, MPLS, wireless, mobile networks, and security.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#dashboard" className="rounded-lg bg-slate-950 px-6 py-4 font-bold text-white shadow-lg shadow-slate-200 hover:bg-slate-800">
                Open dashboard
              </a>
              <a href="#practice" className="rounded-lg border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 hover:bg-slate-100">
                Practice tests
              </a>
              <a href="#glossary" className="rounded-lg border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 hover:bg-slate-100">
                Search glossary
              </a>
            </div>
          </div>

          <Card>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-4xl font-black text-slate-950">{topics.length}</p>
                <p className="font-bold text-slate-500">core topics</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-950">{glossary.length}</p>
                <p className="font-bold text-slate-500">glossary terms</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-950">{practiceTests.reduce((sum, test) => sum + test.questions.length, 0)}</p>
                <p className="font-bold text-slate-500">practice questions</p>
              </div>
            </div>
          </Card>
        </section>

        <section id="dashboard" className="scroll-mt-24 py-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Badge>Topic map</Badge>
              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">Jump to any topic</h2>
            </div>
            <p className="max-w-2xl text-slate-600">Each chapter links to focused terms, comparisons, flow steps, flashcards, and practice questions.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {topics.map((topic, index) => {
              const Icon = iconMap[topic.id] || Globe2;
              return (
                <a key={topic.id} href={`#${topic.id}`} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className={`mb-5 inline-flex rounded-lg p-3 text-white shadow-sm ${toneMap[topic.color] || "bg-slate-800"}`}>
                    <Icon size={28} />
                  </div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Badge>{topic.unit}</Badge>
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 group-hover:text-slate-700">
                    {index + 1}. {topic.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{topic.subtitle}</p>
                </a>
              );
            })}
          </div>
        </section>

        {topics.map((topic, index) => (
          <TopicSection key={topic.id} topic={topic} index={index} />
        ))}

        <PracticeZone />
        <GlossaryPanel />
      </main>
    </div>
  );
}
