---
sidebar_label: Environment Setup
sidebar_position: 2
---

# Environment Setup

This guide will walk you through setting up your development environment for the [**Quotes Project**](https://github.com/voynich-services/quotes-project). It includes instructions for both **Windows** and **macOS/Linux** users.

This environment setup is designed to be general, you'll do the same for your future internship projects.

---

## Install Dev Tools
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

## Install Python and uv

### Python

- Download from [https://www.python.org/downloads/](https://www.python.org/downloads/)
- On **Windows**, make sure to check **"Add Python to PATH"** during installation.
- On **macOS/Linux**, you can also use Homebrew:
  `brew install python@3.11`

Verify:
`python --version`

### uv

Install `uv`, a modern Python package and dependency manager. Learn more at [uv documentation](https://docs.astral.sh/uv/).

**Installation options:**

- **Universal method (recommended):**
  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

- **Windows PowerShell:**
  ```powershell
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
  ```

- **Alternative (if you already have Python/pip):**
  ```bash
  pip install uv
  ```

Verify installation:
```bash
uv --version
```

---

## Install Node.js and npm

- Download from [https://nodejs.org/](https://nodejs.org/) (LTS version recommended)
- On macOS: `brew install node`

Verify:
`node --version`
`npm --version`

---

## Install Docker (for MongoDB)

### Why Docker for MongoDB?

We use Docker for MongoDB because it:
- Ensures everyone uses the same MongoDB version
- Avoids conflicts with existing MongoDB installations
- Makes it easy to start fresh (just remove the container)
- Simplifies the setup process

If you prefer to install MongoDB directly, you can, but Docker is recommended for consistency.

### Install Docker

Follow installation steps based on your platform:

- **Windows & macOS:** [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
- **Linux:** Refer to your distro’s documentation

Verify:
`docker --version`

Useful: [Docker Cheat Sheet](https://github.com/wsargent/docker-cheat-sheet), [Basic Commands Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)

---

## Install MongoDB Compass

To navigate and explore your MongoDB data easily, install [MongoDB Compass](https://www.mongodb.com/products/compass) - MongoDB's official GUI tool.

Download from: https://www.mongodb.com/try/download/compass

This is the official MongoDB GUI and provides the best experience for viewing and managing your data.

---

## Clone the Project Repository

```bash
git clone https://github.com/voynich-services/quotes-project.git
cd quotes-project
```

---

## Backend Setup

1. Navigate to the backend folder (or open it in PyCharm):
   ```bash
   cd backend
   ```

2. Set up the project environment:
   ```bash
   uv sync --extra dev
   ```

3. Set up `pre-commit`:
   ```bash
   pre-commit install
   ```

4. Create the `.env` file from the template:
   ```bash
   cp .env.example .env
   ```
   If the above command didn't work on Windows _(Use `copy`)_:
   ```bash
   copy .env.example .env
   ```

---

## Frontend Setup

1. Navigate to the frontend folder (or open it in VSCode):
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Create the `.env` file from the template:
   ```bash
   cp .env.example .env
   ```
   If the above command didn't work on Windows _(Use `copy`)_:
   ```bash
   copy .env.example .env
   ```

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

- [Postman](https://www.postman.com/) for testing APIs manually

---
