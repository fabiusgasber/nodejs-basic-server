# Basic Node.js Website

This is a simple Node.js project that serves static HTML pages using the built-in `http`, `path`, and `fs` modules. It demonstrates how to set up a minimal web server without any external frameworks.

## 📖 Overview

The server listens on **port 3000**.
It responds with:
  - `index.html` when accessing `/`
  - `about.html` when accessing `/about`
  - `contact-me.html` when accessing `/contact-me`
  - `404.html` for all other paths
If a file read error occurs, the server returns a `500 Internal Server Error`.

This project is meant as a practice exercise to understand serving static files and handling basic routing with Node.js.

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. **Run the server:**
   ```bash
   node index.js
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## ✅ Requirements

- Node.js (v14 or higher recommended)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
