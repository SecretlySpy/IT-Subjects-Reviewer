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

<br>

## ✨ Features

- **🧠 Interactive Learning**  
  Engage with topic cards, visual packet paths, interactive flashcards, scored quizzes, and a searchable glossary.

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
2. Open a reviewer folder, such as [\`Networking 2\`](Networking%202/).
3. Launch [\`index.html\`](Networking%202/index.html) in your favorite browser.

### ⚛️ For React Developers
1. Copy \`NetworkingTwoBeginnerGuide.jsx\` and \`data.js\` into your project.
2. Ensure you have \`lucide-react\` and \`framer-motion\` installed.
3. Import and render the component in your application!

<br>

## 🏗️ Architecture

The codebase is deeply optimized for maintainability and performance. Large datasets (topics, glossaries, practice tests) are decoupled from the UI logic into a single source of truth.

\`\`\`text
IT-Subjects-Reviewer/
├─ README.md
└─ Networking 2/
   ├─ data.js                         # 📦 Unified data source (Topics, Glossary, Quizzes)
   ├─ index.html                      # 🌐 Vanilla HTML/CSS/JS Implementation
   └─ NetworkingTwoBeginnerGuide.jsx  # ⚛️ React + Tailwind Implementation
\`\`\`

💡 **Pro Tip:** If you want to **add a new question or term**, simply edit \`data.js\`. The changes will instantly reflect in both the HTML and React versions!

<br>

## 📝 Notes

- Designed specifically for quick studying and rapid exam review.
- **GitHub Pages** can host the HTML files natively without installing any Node.js dependencies.
- More subjects and modules will be continually added using this scalable, decoupled structure.
