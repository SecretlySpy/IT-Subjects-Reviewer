/**
 * html-diagnostics.js
 *
 * Consolidated diagnostic utility for the Networking 2 Reviewer.
 * Replaces the former fix4.js, fix5.js, and fix6.js one-liner scripts.
 *
 * Run with:  node html-diagnostics.js
 *
 * Checks performed:
 *   1. IntersectionObserver guard  — verifies the `if (!entry.isIntersecting) return;`
 *      pattern exists so reveal animations fire correctly.
 *   2. Hidden utility class        — confirms a `.hidden` CSS rule is present (used
 *      to toggle practice-tab panels).
 *   3. Glossary CSS rules          — lists every CSS rule that mentions "glossary" so
 *      layout regressions are easy to spot.
 */

const fs = require("fs");
const path = require("path");

const HTML_PATH = path.join(__dirname, "Networking 2", "index.html");

function readHtml() {
  if (!fs.existsSync(HTML_PATH)) {
    console.error(`\u2718  File not found: ${HTML_PATH}`);
    process.exit(1);
  }
  return fs.readFileSync(HTML_PATH, "utf8");
}

function extractStyleBlock(html) {
  const match = html.match(/<style>([\s\S]*?)<\/style>/);
  return match ? match[1] : "";
}

/* ------------------------------------------------------------------ */
/*  Check 1 — IntersectionObserver guard (formerly fix4.js)           */
/* ------------------------------------------------------------------ */
function checkObserverGuard(html) {
  const pattern = "if (!entry.isIntersecting) return;";
  const found = html.includes(pattern);
  console.log(
    found
      ? "\u2714  IntersectionObserver guard is present."
      : "\u2718  IntersectionObserver guard is MISSING — reveal animations may not work."
  );
  return found;
}

/* ------------------------------------------------------------------ */
/*  Check 2 — .hidden utility class (formerly fix5.js)                */
/* ------------------------------------------------------------------ */
function checkHiddenClass(css) {
  const found = css.includes(".hidden");
  console.log(
    found
      ? "\u2714  .hidden utility class exists in CSS."
      : "\u2718  .hidden utility class is MISSING — practice-tab toggling will break."
  );
  return found;
}

/* ------------------------------------------------------------------ */
/*  Check 3 — Glossary CSS rules (formerly fix6.js)                   */
/* ------------------------------------------------------------------ */
function listGlossaryRules(css) {
  const lines = css.split("\n").filter((line) => line.includes("glossary"));
  if (lines.length) {
    console.log(`\u2714  Found ${lines.length} glossary-related CSS rule(s):`);
    lines.forEach((line) => console.log(`     ${line.trim()}`));
  } else {
    console.log("\u2718  No glossary CSS rules found — layout may be missing.");
  }
  return lines.length > 0;
}

/* ------------------------------------------------------------------ */
/*  Run all checks                                                    */
/* ------------------------------------------------------------------ */
function main() {
  console.log("──────────────────────────────────────────");
  console.log("  Networking 2 Reviewer — HTML Diagnostics");
  console.log("──────────────────────────────────────────\n");

  const html = readHtml();
  const css = extractStyleBlock(html);

  const results = [
    checkObserverGuard(html),
    checkHiddenClass(css),
    listGlossaryRules(css),
  ];

  const passed = results.every(Boolean);
  console.log(
    passed
      ? "\n\u2705  All checks passed."
      : "\n\u26A0\uFE0F  Some checks failed — review the output above."
  );
  process.exit(passed ? 0 : 1);
}

main();
