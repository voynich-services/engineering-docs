---
sidebar_label: Environment Setup
sidebar_position: 3
---

# Environment Setup

This guide will walk you through setting up your development environment for the **Quotes Project**. It includes instructions for both **Windows** and **macOS/Linux** users.

---

## Prerequisites

- A modern operating system: Windows 10/11, macOS, or Linux.  
- Administrative privileges to install software.  
- Basic familiarity with the command line/terminal.  
- A stable internet connection.

### Dev Tools
We recommend using the following tools for an optimal development and debugging experience:

- **Backend:** [PyCharm Community Edition (free)](https://www.jetbrains.com/pycharm/download/), highly recommended for Python and FastAPI debugging.
- **Frontend:** [Visual Studio Code (VSCode)](https://code.visualstudio.com/download), great support for React and JavaScript debugging.

Of course, you are free to use any other IDE or editor that suits your workflow.

---

## Install Git

Download Git from [https://git-scm.com/downloads](https://git-scm.com/downloads) and follow the installation instructions for your OS.

- **Windows:** Choose to install **Git Bash** during setup.
- **macOS:** Git is often preinstalled. If not, run:
  `xcode-select --install`
- **Linux (Debian-based):**
  `sudo apt update && sudo apt install git`

Verify installation:
`git --version`

---

## Install Python and uv (Virtual Env + Package Manager)

### Python

- Download from [https://www.python.org/downloads/](https://www.python.org/downloads/)
- On **Windows**, make sure to check **"Add Python to PATH"** during installation.
- On **macOS/Linux**, you can also use Homebrew:
  `brew install python@3.11`

Verify:
`python --version`

### uv

Install `uv`, a modern package/dependency manager:

- **Universal method:**
  `curl -LsSf https://astral.sh/uv/install.sh | sh`

Verify:
`uv --version`

---

## Install Node.js and npm

- Download from [https://nodejs.org/](https://nodejs.org/) (LTS version recommended)
- On macOS: `brew install node`

Verify:
`node --version`
`npm --version`

---

## Install Docker (for MongoDB)

Follow installation steps based on your platform:

- **Windows & macOS:** [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
- **Linux:** Refer to your distro’s documentation

Verify:
`docker --version`

Useful: [Docker Cheat Sheet](https://github.com/wsargent/docker-cheat-sheet), [Basic Commands Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)

---

## Install a GUI for MongoDB (Optional)

To navigate and explore your MongoDB data easily, install [NoSQLBooster](https://nosqlbooster.com/) or a similar tool like [MongoDB Compass](https://www.mongodb.com/products/compass).

---

## Clone the Project Repository

```bash
git clone https://github.com/voynich-services/quotes-project.git
cd quotes-project
```

---

## Backend Setup

1. Navigate to the backend folder:
   `cd backend`

2. Create a virtual environment with `uv` and activate it:

   - **Windows (CMD):**
     `uv venv .venv && .venv\Scripts\activate.bat`
   - **macOS/Linux:**
     `uv venv .venv && source .venv/bin/activate`

3. Install backend dependencies:
   `uv pip install -r requirements.txt`

4. Install `ruff` and `pre-commit`:
   `uv pip install ruff pre-commit`

5. Set up `pre-commit`:
   `pre-commit install`

6. Create a `.env` file from the template and configure it:
   `cp .env.example .env`
   _(Use `copy` on Windows: `copy .env.example .env`)_

---

## Frontend Setup

1. Navigate to the frontend folder:
   `cd frontend`

2. Install frontend dependencies:
   `npm install`

3. Create a `.env` file:
   `cp .env.example .env`
   _(Use `copy` on Windows)_

---

## Debugging Setup

To help you debug the application efficiently, here are some useful resources for setting up debugging in your preferred environment:

- **Frontend (React):** Follow the [VSCode Debugging for React](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial) guide to configure your development environment for smooth debugging.
  
- **Backend (FastAPI / Python):** We suggest using PyCharm Community Edition, which offers powerful debugging tools for Python. Check the [PyCharm Debugging Guide](https://www.jetbrains.com/help/pycharm/debugging-code.html) for detailed setup instructions.

Feel free to use other IDEs or debugging tools you prefer — the important part is to develop confidence in your debugging skills.

---

## Troubleshooting Tips

- If imports in Python show errors, make sure the terminal is open in the correct folder and that the virtual environment is activated.
- If the frontend environment variable `import.meta.env.VITE_API_URL` doesn’t work, restart the dev server and double-check your `.env`.

---

## Additional Tools (Optional)

- [NoSQLBooster](https://nosqlbooster.com/) or [MongoDB Compass](https://www.mongodb.com/products/compass) to explore the database visually
- [Postman](https://www.postman.com/) for testing APIs manually
- [HTTPie](https://httpie.io/) for a terminal-based API testing experience

---
