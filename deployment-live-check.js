/**
 * deployment-live-check.js
 *
 * Verifies what GitHub Pages is ACTUALLY serving, as opposed to what the local
 * `dist/` build contains. `deployment-diagnostics.js` validates the artifact on
 * disk; this script validates the deployed site.
 *
 * The gap matters: a perfectly good `dist/` still produces a broken site when
 * Pages is configured to publish the repository root from a branch instead of
 * the GitHub Actions artifact. In that state the browser is handed
 * `/src/main.tsx` — uncompiled TypeScript served with a non-JavaScript MIME type
 * — refuses to execute it, and the page falls back to "The reviewer could not
 * start".
 *
 * Run with:
 *   node deployment-live-check.js
 *   node deployment-live-check.js https://example.github.io/Other-Repo/
 */

// Default to this project's published URL; allow an override for forks.
const DEFAULT_SITE = "https://secretlyspy.github.io/IT-Subjects-Reviewer/";

const siteUrl = (process.argv[2] ?? DEFAULT_SITE).replace(/\/?$/, "/");

/** ANSI helpers kept trivial so output stays readable in plain terminals. */
const pass = (message) => console.log(`  ✔ ${message}`);
const fail = (message) => console.log(`  ✖ ${message}`);

/**
 * Fetch a URL and report status plus content type without throwing.
 * @param {string} url - Absolute URL to request.
 * @returns {Promise<{status: number, type: string, body: string}>} Response facts.
 */
async function probe(url) {
  try {
    // Cache-bust so an edge cache cannot mask a fresh deployment.
    const response = await fetch(`${url}${url.includes("?") ? "&" : "?"}livecheck=${Date.now()}`, {
      redirect: "follow",
    });
    const type = response.headers.get("content-type") ?? "";
    // Only the entry document's body is needed; assets are checked by status.
    const body = type.includes("text/html") ? await response.text() : "";
    return { status: response.status, type, body };
  } catch (error) {
    return { status: 0, type: `request failed: ${error.message}`, body: "" };
  }
}

/**
 * Run every live-site assertion and summarise the deployment mode.
 * @returns {Promise<void>}
 */
async function main() {
  console.log("IT Subjects Reviewer — Live Deployment Check");
  console.log(`Target: ${siteUrl}\n`);

  const entry = await probe(siteUrl);
  const results = [];

  if (entry.status === 200) {
    pass(`entry document responds 200 (${entry.type.split(";")[0] || "unknown type"})`);
    results.push(true);
  } else {
    fail(`entry document responded ${entry.status || "no response"} — ${entry.type}`);
    results.push(false);
  }

  // The single most diagnostic signal: a compiled entry never names the dev entry.
  const servesDevEntry = entry.body.includes("/src/main.tsx");
  const servesCompiled = /\/assets\/[^"']+\.js/.test(entry.body);

  if (servesCompiled && !servesDevEntry) {
    pass("entry references the compiled /assets/ bundle");
    results.push(true);
  } else if (servesDevEntry) {
    fail("entry references /src/main.tsx — raw TypeScript, which no browser can execute");
    results.push(false);
  } else {
    fail("entry references neither a compiled bundle nor the dev entry");
    results.push(false);
  }

  // Each referenced asset must actually resolve, or the shell loads and dies.
  const assetPaths = [...new Set(entry.body.match(/[^"']*\/assets\/[^"']+/g) ?? [])];
  for (const assetPath of assetPaths) {
    const assetUrl = new URL(assetPath, siteUrl).href;
    const asset = await probe(assetUrl);
    if (asset.status === 200) {
      pass(`asset resolves: ${assetPath}`);
      results.push(true);
    } else {
      fail(`asset missing (${asset.status}): ${assetPath}`);
      results.push(false);
    }
  }

  // Source files reaching the public site prove branch-root publishing.
  const leakChecks = ["package.json", "vite.config.ts", "src/main.tsx"];
  const leaked = [];
  for (const file of leakChecks) {
    const probed = await probe(new URL(file, siteUrl).href);
    if (probed.status === 200) leaked.push(file);
  }

  if (leaked.length === 0) {
    pass("repository source files are not exposed");
    results.push(true);
  } else {
    fail(`repository source is being served: ${leaked.join(", ")}`);
    results.push(false);
  }

  const failed = results.filter((ok) => !ok).length;
  console.log("");

  if (failed === 0) {
    console.log("LIVE_DEPLOYMENT_OK — Pages is serving the compiled artifact.");
    return;
  }

  // A wrong Pages source is by far the most common cause, so name the fix.
  if (leaked.length > 0 || servesDevEntry) {
    console.log("DIAGNOSIS: GitHub Pages is publishing the repository root from a branch.");
    console.log("");
    console.log("  The build and the workflow are fine — the artifact is simply not being used.");
    console.log("  Fix (repository setting, cannot be changed from code):");
    console.log("    Settings → Pages → Build and deployment → Source: GitHub Actions");
    console.log("  Then re-run the 'Deploy to GitHub Pages' workflow.");
  } else {
    console.log("DIAGNOSIS: the deployed artifact is incomplete or stale.");
    console.log("  Re-run the 'Deploy to GitHub Pages' workflow and re-check.");
  }

  console.log("");
  process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
