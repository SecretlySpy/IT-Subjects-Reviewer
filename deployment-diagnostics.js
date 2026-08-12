/**
 * deployment-diagnostics.js
 *
 * Reject a GitHub Pages artifact that still references Vite source files or
 * whose generated JavaScript/CSS URLs do not resolve inside dist/. This catches
 * the exact failure mode that otherwise leaves React's #root completely blank.
 */

// Load filesystem helpers used to inspect the generated production artifact.
import fs from 'node:fs';

// Load path helpers so the check works on Windows and Linux runners.
import path from 'node:path';

// Convert this ES module's URL into a stable repository path.
import { fileURLToPath } from 'node:url';

// Execute the boot fallback in a browser-like document before deployment.
import { JSDOM } from 'jsdom';

// Resolve all paths from the repository rather than the caller's shell folder.
const repositoryRoot = path.dirname(fileURLToPath(import.meta.url));

// Vite writes the production site here before GitHub Pages uploads it.
const distDirectory = path.join(repositoryRoot, 'dist');

// The entry point must sit at the artifact root for GitHub Pages.
const entryPath = path.join(distDirectory, 'index.html');

/**
 * Record a successful deployment contract check.
 * @param {string} message - Human-readable condition that passed.
 * @returns {void}
 */
function pass(message) {
  console.log(`PASS: ${message}`);
}

/**
 * Stop the deployment with a precise contract failure.
 * @param {string} message - Human-readable condition that failed.
 * @returns {never}
 */
function fail(message) {
  throw new Error(`DEPLOYMENT_CHECK_FAILED: ${message}`);
}

/**
 * Convert one generated site URL into its expected path within dist/.
 * @param {string} assetUrl - Absolute-path URL emitted by Vite.
 * @returns {string} Filesystem path to the generated asset.
 */
function assetPathInDist(assetUrl) {
  // The assets directory is the stable boundary; the prefix is the Pages base.
  const assetsIndex = assetUrl.indexOf('/assets/');
  if (assetsIndex < 0) fail(`generated URL is outside the assets directory: ${assetUrl}`);

  // Strip the site base while retaining assets/<hashed file> beneath dist/.
  const relativeAsset = assetUrl.slice(assetsIndex + 1);
  return path.join(distDirectory, ...relativeAsset.split('/'));
}

/**
 * Prove that a failed production module replaces the loading state with help.
 * @param {string} html - Generated production entry point.
 * @returns {void}
 */
function checkBootFallback(html) {
  // JSDOM runs the inline guard but deliberately does not execute module scripts.
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    url: 'https://secretlyspy.github.io/IT-Subjects-Reviewer/',
  });

  try {
    const moduleScript = dom.window.document.querySelector('script[type="module"]');
    if (!moduleScript) fail('the production entry is missing its module script');

    // Reproduce the browser event produced by a 404 or blocked JavaScript bundle.
    moduleScript.dispatchEvent(new dom.window.Event('error'));

    const alert = dom.window.document.querySelector('[data-boot-screen][role="alert"]');
    if (!alert?.textContent.includes('could not start')) {
      fail('a module load error did not activate the visible boot failure state');
    }
    pass('a failed module load activates the visible boot failure state');
  } finally {
    // Closing cancels the fallback timer so this build check exits immediately.
    dom.window.close();
  }
}

/**
 * Validate the complete artifact contract before it can be deployed.
 * @returns {void}
 */
function main() {
  if (!fs.existsSync(entryPath)) fail('dist/index.html does not exist; run npm run build first');

  // Read once, then use linear regular-expression scans over this small file.
  const html = fs.readFileSync(entryPath, 'utf8');

  // Raw TSX proves the branch source was published instead of the Vite output.
  if (html.includes('/src/main.tsx')) fail('dist/index.html still references the Vite development entry');
  pass('the production entry does not reference /src/main.tsx');

  // Keep the visible boot fallback in the built HTML for network/runtime failures.
  if (!html.includes('data-boot-screen')) fail('the production entry is missing its boot failure fallback');
  pass('the production entry contains the accessible boot fallback');
  checkBootFallback(html);

  // Capture module and stylesheet URLs emitted into the production entry.
  const generatedAssets = [
    ...html.matchAll(/(?:src|href)="([^"]*\/assets\/[^"]+)"/g),
  ].map((match) => match[1]);

  if (generatedAssets.length < 2) fail('expected generated JavaScript and CSS asset URLs');

  // A Set removes duplicates in O(n) expected time; n is normally only two.
  for (const assetUrl of new Set(generatedAssets)) {
    if (!assetUrl.startsWith('/')) fail(`asset URL is not root-relative: ${assetUrl}`);
    if (!fs.existsSync(assetPathInDist(assetUrl))) fail(`generated asset is missing: ${assetUrl}`);
    pass(`generated asset exists: ${assetUrl}`);
  }

  console.log('\nDEPLOYMENT_DIAGNOSTICS_PASSED');
}

// Surface thrown failures as a nonzero GitHub Actions result with a full stack.
try {
  main();
} catch (error) {
  console.error(error.stack || error.message);
  process.exitCode = 1;
}
