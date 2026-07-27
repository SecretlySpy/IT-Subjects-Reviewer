import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { VitePWA } from 'vite-plugin-pwa';

/**
 * Directory names of the zero-build reviewers that live beside the React app.
 * They are plain HTML/CSS/JS and are not part of the bundle, so the build has to
 * copy them into dist/ or they would be missing from the deployed GitHub Pages site.
 */
const STANDALONE_REVIEWERS = [
  'Networking 2',
  'Systems Integration and Architecture 1',
  'Mobile Computing',
];

/**
 * Copy every standalone reviewer folder into the build output.
 * @returns {Plugin} A Vite plugin that runs once the bundle has been written.
 */
function copyStandaloneReviewers(): Plugin {
  return {
    name: 'copy-standalone-reviewers',
    apply: 'build',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist');
      for (const reviewer of STANDALONE_REVIEWERS) {
        const source = path.resolve(__dirname, reviewer);
        if (!fs.existsSync(source)) {
          this.warn(`Standalone reviewer not found, skipping: ${reviewer}`);
          continue;
        }
        fs.cpSync(source, path.join(outDir, reviewer), { recursive: true });
      }
    },
  };
}

// Paths that belong to the standalone reviewers rather than the SPA.
// The folder segment is matched anywhere in the path so the pattern keeps working
// whether the site is served from the domain root or from a base path.
// Spaces may arrive percent-encoded or literal depending on the browser.
const REVIEWER_ROUTE_PATTERN = new RegExp(
  `/(${STANDALONE_REVIEWERS.map((name) => name.replace(/ /g, '(?:%20|\\+| )')).join('|')})/`
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copyStandaloneReviewers(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        // The standalone reviewers are separate static apps; keep them out of the
        // SPA precache and stop the SPA shell from answering navigations to them.
        globIgnores: STANDALONE_REVIEWERS.map((name) => `${name}/**`),
        navigateFallbackDenylist: [REVIEWER_ROUTE_PATTERN],
      },
      manifest: {
        name: 'IT Subjects Reviewer',
        short_name: 'IT Reviewer',
        description: 'Interactive open-source study platform for IT students.',
        theme_color: '#0B0F14',
        background_color: '#0B0F14',
        display: 'standalone',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/IT-Subjects-Reviewer/', // For GitHub Pages
});
