<div align="center">

<img src="assets/readme-hero.svg" alt="Animated IT Subjects Reviewer banner" width="100%" />

<h1>📚 IT Subjects Reviewer</h1>

**Interactive, browser-based & component-driven study reviewers for IT subjects.**

<p align="center">
  <img src="https://img.shields.io/badge/Static%20HTML-Ready-16805f?style=for-the-badge&logo=html5&logoColor=white" alt="Static HTML" />
  <img src="https://img.shields.io/badge/React-Component-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React Support" />
  <img src="https://img.shields.io/badge/Design-Responsive-326bdc?style=for-the-badge&logo=css3&logoColor=white" alt="Responsive" />
  <img src="https://img.shields.io/badge/Hosting-GitHub%20Pages-7556b8?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
</p>

[Explore Modules](#-available-reviewers) • [Features](#-features) • [Quick Start](#-quick-start) • [Architecture](#-architecture)

</div>

---

> **Empowering IT students with lightweight, interactive, and beautifully designed study materials.**
> Whether you prefer zero-setup offline HTML files or modular React components, this repository has you covered.

## 🎯 Overview

This repository collects interactive reviewers for IT subjects, providing dual implementations for maximum flexibility:

- 🌐 **Zero-build Vanilla Apps:** Run directly in the browser via simple HTML/CSS/JS files. Perfect for GitHub pages or local offline viewing. No installation required.
- ⚛️ **Modern React Components:** Fully-featured, Tailwind-styled \`.jsx\` components ready to be dropped into your modern web applications.

## 📖 Available Reviewers

| 📚 Subject / Module | 🎯 What It Covers | 🛠️ Formats | 🔗 Links |
| :--- | :--- | :--- | :--- |
| **Networking 2**<br><sub>*Interactive study dashboard*</sub> | Internet architecture, application & transport layers, routing, LANs, wireless/mobile networking, and network security. | \`<Vanilla HTML>\`<br>\`<React JSX>\` | [📁 View Folder](Networking%202/)<br>[🚀 Open Web App](Networking%202/index.html) |
| **Systems Integration and Architecture 1**<br><sub>*Modules 1–5 interactive reviewer*</sub> | Enterprise Information Architecture, IT Governance, Information and Data Modelling, SOA, Microservices, XML/JSON, Web Services (SOAP/WSDL/UDDI), EAI, Middleware, and Cloud Computing — with blueprint, model-layer, scenario, and standards-reference activities. | \`<Vanilla HTML>\`<br>\`<React JSX>\` | [📁 View Folder](Systems%20Integration%20and%20Architecture%201/)<br>[🚀 Open Web App](Systems%20Integration%20and%20Architecture%201/index.html) |
| **Mobile Computing**<br><sub>*Interactive reviewer*</sub> | Concepts, Platforms, Evolution of mobile technologies, and Modern JavaScript with ES6. | \`<Vanilla HTML>\`<br>\`<React JSX>\` | [📁 View Folder](Mobile%20Computing/)<br>[🚀 Open Web App](Mobile%20Computing/index.html) |

<br>

## ✨ Features

- **🧠 Interactive Learning**  
  Engage with topic cards, visual system paths, scenario challenges, interactive flashcards, scored quizzes, and searchable glossaries.

- **⚡ Zero-Build Option**  
  The vanilla implementations require zero dependencies. Just open \`index.html\` and start studying instantly.

- **⚛️ React Ready**  
  Drop the \`.jsx\` files into any React/Tailwind project for a modern, seamless integration into your own apps.

- **🧩 DRY Architecture**  
  Data is decoupled from the UI. Add new questions or terms in one file, and both React and HTML versions update automatically.

<br>

## 🚀 Quick Start

### 🌐 For Offline & Browser Usage (Vanilla)
1. Clone or download this repository.
2. Open a reviewer folder, such as [\`Networking 2\`](Networking%202/) or [\`Systems Integration and Architecture 1\`](Systems%20Integration%20and%20Architecture%201/).
3. Launch that folder's \`index.html\` in your favorite browser.

### ⚛️ For React Developers
1. Copy the selected reviewer component and its adjacent \`data.js\` into your project.
2. Ensure React and Tailwind CSS are available; the Networking 2 component additionally uses \`lucide-react\`.
3. Import and render the component in your application.

<br>

## 🏗️ Architecture

The codebase is deeply optimized for maintainability and performance. Large datasets (topics, glossaries, practice tests) are decoupled from the UI logic into a single source of truth.

\`\`\`text
IT-Subjects-Reviewer/
├─ README.md
├─ AI Documentation Notes.md          # machine-readable module/function reference
├─ Tech Stack Setup Guide.md          # stack list, per-OS setup, troubleshooting
├─ index.html                         # React platform entry
├─ public/                            # PWA icons
├─ src/                               # React study platform (Vite + TS + Tailwind)
│  ├─ app/                            # layout + routes
│  ├─ components/                     # ui + diagram components
│  ├─ study-engine/                   # SM-2 scheduling, adaptive quiz, progress store
│  └─ subjects/<id>/data.ts           # platform content per subject
├─ html-diagnostics.js                # QA: static + data contract checks
├─ reviewer-interaction-tests.js      # QA: JSDOM interaction suite (SIA reviewer)
├─ subject-data-tests.js              # QA: React subject-data integrity
├─ spa-smoke-tests.js                 # QA: JSDOM runtime smoke test of the SPA
├─ Mobile Computing/
│  ├─ data.js
│  ├─ index.html
│  └─ MobileComputingBeginnerGuide.jsx
├─ Networking 2/
│  ├─ data.js
│  ├─ index.html
│  └─ NetworkingTwoBeginnerGuide.jsx
└─ Systems Integration and Architecture 1/
   ├─ data.js
   ├─ index.html
   └─ SystemsIntegrationArchitectureOneBeginnerGuide.jsx
\`\`\`

💡 **Pro Tip:** To add a question, term, scenario, or topic to a zero-build reviewer, edit that reviewer's \`data.js\`. Both its HTML and React versions consume the same content contract. To change the React platform's lessons, edit \`src/subjects/<id>/data.ts\`.

<br>

## 🧪 Quality Checks

\`\`\`bash
npm install
npm test      # runs all four QA suites
npm run build # type-checks, bundles the SPA, and copies the reviewers into dist/
\`\`\`

\`npm test\` runs, in order: repository diagnostics, the JSDOM interaction suite for the Systems Integration reviewer, content-integrity checks for the React subject datasets, and a runtime smoke test of the React application.

<br>

## 📝 Notes

- Designed specifically for quick studying and rapid exam review.
- The zero-build reviewers need **no Node.js and no internet** — open \`index.html\` and study.
- \`npm run build\` copies all three standalone reviewers into \`dist/\`, so the GitHub Pages deployment serves both the React platform and the zero-build apps.
- Systems Integration and Architecture 1 cites its primary standards (OASIS SOA-RM, W3C XML/SOAP/WSDL, IETF RFC 8259, NIST SP 800-145 and SP 500-292) in its glossary section so claims can be checked at source.
- More subjects and modules will be continually added using this scalable, decoupled structure.
