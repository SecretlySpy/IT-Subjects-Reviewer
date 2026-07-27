/**
 * spa-smoke-tests.js
 *
 * Runtime smoke tests for the React study platform.
 *
 * The application is bundled once into a classic (IIFE) script so it can be
 * executed inside JSDOM, then the most important user paths are exercised:
 * the dashboard renders, a subject page opens, the adaptive quiz scores an
 * answer, and the spaced-repetition flashcard session runs a card end to end.
 *
 * Run with:
 *   node spa-smoke-tests.js
 */

// Load file-system helpers for the temporary bundle directory.
import fs from "node:fs";

// Load path helpers for Windows, macOS, and Linux compatibility.
import path from "node:path";

// Convert this ES module's URL into a filesystem path.
import { fileURLToPath } from "node:url";

// Load JSDOM to execute the bundled application in a browser-like document.
import { JSDOM } from "jsdom";

// Load Vite's programmatic build API to resolve TypeScript, JSX, and the "@/" alias.
import { build } from "vite";

// Resolve the repository root from this module's location.
const repositoryRoot = path.dirname(fileURLToPath(import.meta.url));

// Keep the compiled bundle out of the tracked tree.
const outDir = path.join(repositoryRoot, "node_modules", ".tmp", "spa-smoke-tests");

// Entry module used only by this suite; it mounts the router into #root.
const entrySource = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/App';

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
`;

/**
 * Record a passing condition or throw a precise failure.
 * @param {boolean} condition - Assertion result.
 * @param {string} message - User behavior being verified.
 * @returns {void}
 */
function assert(condition, message) {
  if (!condition) {
    throw new Error(`FAIL: ${message}`);
  }
  console.log(`PASS: ${message}`);
}

/**
 * Bundle the application as a classic script JSDOM can execute.
 * @returns {Promise<string>} The bundled JavaScript source.
 */
async function bundleApplication() {
  fs.mkdirSync(outDir, { recursive: true });
  const entryFile = path.join(outDir, "smoke-entry.jsx");
  fs.writeFileSync(entryFile, entrySource, "utf8");

  await build({
    configFile: false,
    logLevel: "error",
    define: { "process.env.NODE_ENV": '"development"' },
    resolve: {
      alias: { "@": path.resolve(repositoryRoot, "src") },
    },
    esbuild: { jsx: "automatic" },
    build: {
      outDir,
      emptyOutDir: false,
      minify: false,
      cssCodeSplit: false,
      lib: {
        entry: entryFile,
        formats: ["iife"],
        name: "ITReviewerSmoke",
        fileName: () => "smoke-bundle.js",
      },
    },
  });

  return fs.readFileSync(path.join(outDir, "smoke-bundle.js"), "utf8");
}

/**
 * Create a document with the browser APIs JSDOM does not implement.
 * @param {string} script - Bundled application source.
 * @returns {JSDOM} Configured test document.
 */
function createDom(script) {
  const dom = new JSDOM(
    `<!doctype html><html><head><title>smoke</title></head><body><div id="root"></div></body></html>`,
    {
      url: "https://it-reviewer.local/",
      runScripts: "dangerously",
      pretendToBeVisual: true,
      beforeParse(window) {
        window.matchMedia = () => ({
          matches: false,
          addEventListener() {},
          removeEventListener() {},
          addListener() {},
          removeListener() {},
        });
        window.IntersectionObserver = class {
          observe() {}
          unobserve() {}
          disconnect() {}
        };
        window.ResizeObserver = class {
          observe() {}
          unobserve() {}
          disconnect() {}
        };
        window.scrollTo = () => {};
        window.HTMLElement.prototype.scrollIntoView = () => {};
        // The progress store has no IndexedDB here, so this run also exercises
        // its localStorage fallback path.
      },
    }
  );

  const element = dom.window.document.createElement("script");
  element.textContent = script;
  dom.window.document.body.appendChild(element);
  return dom;
}

/**
 * Yield to pending microtasks, React's concurrent renderer, and pending effects.
 * @param {object} window - JSDOM window.
 * @param {number} [rounds] - How many macrotask turns to wait.
 * @returns {Promise<void>}
 */
async function flush(window, rounds = 6) {
  for (let index = 0; index < rounds; index += 1) {
    await new Promise((resolve) => window.setTimeout(resolve, 5));
  }
}

/**
 * Find a rendered element by its trimmed text content.
 * @param {Document} document - Test document.
 * @param {string} selector - CSS selector to search within.
 * @param {string|RegExp} text - Text to match.
 * @returns {Element|undefined} The first matching element.
 */
function findByText(document, selector, text) {
  return [...document.querySelectorAll(selector)].find((element) => {
    const content = element.textContent.trim();
    return text instanceof RegExp ? text.test(content) : content.includes(text);
  });
}

/**
 * Execute the complete SPA smoke suite.
 * @returns {Promise<void>}
 */
async function main() {
  console.log("IT Subjects Reviewer — Study Platform Smoke Tests");
  const script = await bundleApplication();
  const dom = createDom(script);
  const { window } = dom;
  const { document } = window;

  await flush(window);

  // Dashboard renders with real, store-derived figures.
  assert(
    document.querySelector("#root").children.length > 0,
    "the React application mounts into #root"
  );
  assert(
    Boolean(findByText(document, "h1", "Welcome back")),
    "the dashboard renders its heading"
  );
  assert(
    Boolean(findByText(document, "p", "0% through your subjects")),
    "a fresh profile reports 0% overall mastery instead of a hard-coded number"
  );
  assert(
    Boolean(findByText(document, "h3", "Sys Integration 1")),
    "the dashboard lists the Systems Integration subject card"
  );

  // Navigate to the Systems Integration subject page.
  window.location.hash = "#/subject/sia1";
  await flush(window);
  await flush(window);

  assert(
    Boolean(findByText(document, "h1", "Systems Integration & Architecture 1")),
    "the subject page opens for sia1"
  );
  assert(
    Boolean(findByText(document, "button", "Service-Oriented Architecture (SOA)")),
    "the syllabus lists the newly integrated SOA module"
  );
  assert(
    Boolean(findByText(document, "button", "Cloud Computing")),
    "the syllabus lists the newly integrated Cloud Computing module"
  );
  assert(
    Boolean(findByText(document, "h2", "Explain Like I'm 5")),
    "professor mode renders the ELI5 panel for the selected topic"
  );

  // The adaptive quiz must present a question and score an answer.
  findByText(document, "button", "Adaptive Quiz").click();
  await flush(window);
  await flush(window);

  const options = [...document.querySelectorAll("button")].filter((button) =>
    /^[A-D]\./.test(button.textContent.trim())
  );
  assert(options.length >= 2, "the adaptive quiz renders answer options");

  options[0].click();
  await flush(window);
  findByText(document, "button", "Submit Answer").click();
  await flush(window);
  assert(
    Boolean(findByText(document, "h3", /Excellent!|Not quite\./)),
    "submitting an answer reveals scored feedback"
  );
  assert(
    Boolean(findByText(document, "button", "Next Question")),
    "the quiz offers the next adaptive question"
  );

  // The flashcard tab must run a real spaced-repetition session, not a stub.
  findByText(document, "button", "Flashcards").click();
  await flush(window);

  const startButton = findByText(document, "button", /Review \d+ due card/);
  assert(Boolean(startButton), "the flashcard tab offers the due-card queue");
  assert(
    !startButton.disabled,
    "an unreviewed deck reports its cards as due"
  );

  startButton.click();
  await flush(window);
  assert(
    Boolean(findByText(document, "span", "Question")),
    "a flashcard is shown with its question side first"
  );
  assert(
    !findByText(document, "span", "Answer"),
    "the answer stays hidden until it is requested"
  );

  findByText(document, "button", "Show answer").click();
  await flush(window);
  assert(
    Boolean(findByText(document, "span", "Answer")),
    "the answer is revealed on request"
  );

  const gradeButton = findByText(document, "button", "Good");
  assert(Boolean(gradeButton), "SM-2 grade buttons are offered after the reveal");
  gradeButton.click();
  await flush(window);
  assert(
    Boolean(findByText(document, "span", /Card 2 of \d+/)),
    "grading a card advances the session queue"
  );

  dom.window.close();
  fs.rmSync(outDir, { recursive: true, force: true });
  console.log("\nSPA_SMOKE_SUITE_PASSED");
}

// Run the suite and allow thrown assertions to produce a nonzero exit code.
main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
