# 🎓 AI Course Generator

**Industrial-grade educational courses powered by AI.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-4.2-38B2AC?logo=tailwind-css)
![Flask](https://img.shields.io/badge/Flask-3.0-000000?logo=flask)
![GPT-4](https://img.shields.io/badge/AI-GPT--4-412991?logo=openai)

## 🌟 Overview

AI Course Generator is a powerful tool designed to create comprehensive, technically deep, and structured educational curriculum in seconds. Leveraging the power of GPT-4, it architecturally designs modules, lessons, and learning outcomes tailored to your specific topic and difficulty level.

## ✨ Key Features

- **🎯 Intelligent Generation**: Generate courses based on any topic with custom titles.
- **📊 Adaptive Difficulty**: Choose from Beginner, Intermediate, or Advanced levels.
- **🏗️ Structured Curriculum**: Exactly configurable modules and lessons count.
- **📝 Comprehensive Content**:
  - Professional subtitles and pedagogical descriptions.
  - Performance-based learning outcomes.
  - Deep technical coverage and architectural patterns.
  - Real-world, portfolio-ready capstone project ideas.
- **🔍 Extended Learning**: Automatically generates YouTube and search queries for deeper dive.
- **🎨 Modern UI**: A sleek, responsive dashboard built with React and Tailwind CSS 4.

## 🛠️ Tech Stack

- **Frontend**: 
  - [React](https://reactjs.org/) (Functional Components, Hooks)
  - [Vite](https://vitejs.dev/) (Build tool)
  - [Tailwind CSS 4](https://tailwindcss.com/) (Styling)
  - [Lucide React](https://lucide.dev/) (Icons)
  - [Recharts](https://recharts.org/) (Data Visualization)
- **Backend**:
  - [Python](https://www.python.org/)
  - [Flask](https://flask.palletsprojects.com/) (API Framework)
  - [g4f](https://github.com/xtekky/gpt4free) (GPT-4 Interface)
  - [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/)

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18 or later
- **Python**: v3.8 or later
- **npm**: v9 or later

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Amit123103/Intelligent-Recognition-Identification-System.git
   cd Intelligent-Recognition-Identification-System/course
   ```

2. **Setup Backend**:
   ```bash
   pip install flask flask-cors g4f
   ```

3. **Setup Frontend**:
   ```bash
   npm install
   ```

### Running the Project

The easiest way to start both the backend and frontend on Windows is by using the provided batch script:

```bash
start_all.bat
```

This will:
- Launch the **Flask Backend** on `http://localhost:5000`.
- Launch the **Vite Frontend** on `http://localhost:5173`.

## 📂 Project Structure

```text
course/
├── src/                # React Frontend source code
│   ├── App.jsx         # Main Application component
│   ├── CourseGenerator.jsx # Core course generation logic & UI
│   └── index.css       # Tailwind & Global styles
├── server.py           # Flask Backend (AI Engine)
├── start_all.bat       # Quick-start script for Windows
├── index.html          # Frontend entry point
├── package.json        # Frontend dependencies & scripts
└── vite.config.js      # Vite configuration
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with ❤️ by [Amit](https://github.com/Amit123103)
