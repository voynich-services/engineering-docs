---
sidebar_label: Project Overview
sidebar_position: 3
---

# Project Overview

Welcome to the Voynich Services [Quotes project!](https://github.com/voynich-services/quotes-project) This document gives you a high-level overview of the architecture and folder structure of the sample full-stack project you'll be working on.

---

## High-Level Architecture

The project is split into two main parts:

- **Backend:** A FastAPI application written in Python, responsible for serving API endpoints to manage quotes and connecting to the database.
- **Frontend:** A React.js application written in JavaScript/TypeScript, responsible for the user interface where users can view, add, and manage quotes.

These two parts live in separate folders within the same project repository to keep concerns cleanly separated and development workflows straightforward.

```
project-root/
├── backend/ # FastAPI app (Python)
└── frontend/ # React app (JavaScript/TypeScript)
```


---

## How It Works

1. The **React frontend** runs locally on your machine (usually at `http://localhost:3000`). It makes HTTP requests to the backend API to fetch, add, or delete quotes.

2. The **FastAPI backend** runs locally (usually at `http://localhost:8000`) and handles requests from the frontend, performing business logic and interacting with the MongoDB database.

3. The backend connects to a **local MongoDB database**, which stores all the quotes data.

---

## Development Flow

- You will run the backend and frontend separately during development.
- Changes you make in the backend code will be immediately reflected when you restart the backend server (`uvicorn` with `--reload` flag).
- Changes in the frontend will update automatically thanks to React's hot-reloading.
- You will commit and push your code to GitHub repositories and create pull requests for code review.

---

## What You’ll Find in Each Folder

### Backend (`backend/`)

- FastAPI app source code, including API routes, data models, and business logic for managing quotes.
- Requirements file (`pyporject.toml`) listing Python dependencies.
- Environment variables configuration (`.env`) to store sensitive information like the MongoDB connection string.

### Frontend (`frontend/`)

- React app source code organized into components, pages, and services.
- `package.json` file listing Node.js dependencies.
- Public assets and configuration files.

---

This clear separation makes it easy to focus on either frontend or backend development, and helps onboard quickly.

Next, you’ll learn how to set up your local environment for both parts, so you can start running and contributing to the project.

---

Welcome again, and let’s get coding!
