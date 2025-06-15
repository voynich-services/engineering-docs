---
sidebar_label: Your First Launch
sidebar_position: 4
---

# Your First Launch

Welcome to your first task as part of the Voynich Services Quotes project! This guide will help you get the project running locally and verify the setup.

---


## 1. Run & Connect to the Database

### 1.1 Run the Database inside docker container:

In this project, MongoDB runs in a Docker container.

You already installed Docker in the environment setup.

Now it's time to run the container.

Run this command in your terminal:

   ```bash
   docker run --name voynich-mongo -d -p 27018:27017 mongo
   ```

This will:

- Run a MongoDB container in the background.
- Name it ```voynich-mongo``` (you can rename if you want).
- Map port ```27018``` on your local machine to port ```27017``` inside the container (so you can connect via GUI tools like MongoDB Compass).

To confirm it's running:

   ```bash
   docker ps
   ```

You should see ```voynich-mongo``` in the list.

> 💡 To stop the database:
> 
> 
```bash
docker stop voynich-mongo
```

> 💡 To start it again:
> 
> 
```bash
docker start voynich-mongo
```

> 💡 To remove it completely:
> 
> 
```bash
docker rm voynich-mongo
```

### 1.2 Connect to the Database with MongoDB Compass:

To connect to the Docker MongoDB instance:

1. Open MongoDB Compass
2. Use this connection string: ```mongodb://localhost:27018```
3. Click "Connect"

## Running the Backend

1. **Activate your Python virtual environment**

- Windows (CMD):
```
.\.venv\Scripts\activate.bat
```

- macOS/Linux:
```
source .venv/bin/activate
```

2. **Run the backend**

Run it using your IDE (PyCharm) or through the command:
```
python app/main.py
```

You should see uvicorn start up with logs indicating the server is running at `http://localhost:8000`.

3. **Verify backend is running**

Open your browser or use a tool like `curl` to access:

```
curl http://localhost:8000/api/health/mongodb
```

You should receive a JSON response confirming the server and MongoDB are healthy.

---

## Running the Frontend

1. Navigate to the frontend folder: `cd frontend`


2. Install dependencies (if not done already): `npm install`

3. Run the frontend dev server: `npm run dev`

This will start the React app at `http://localhost:5173` (or the port displayed in the terminal).

4. Open your browser and go to that URL to see the Quotes app.

---

## What's next?

Once both frontend and backend are running:

- Explore the app in your browser.
- Try browsing quotes, authors.
- Look out for the intentional bugs in both frontend and backend — your next challenge is to find and fix them using debugging tools.
- After fixing bugs, you will be assigned or choose a new feature to implement. This will help you get familiar with the codebase and workflows.

---

## Helpful Tips

- Keep your virtual environment activated while working on the backend.
- Open the browser developer tools and React DevTools to help debug frontend issues.
- For backend debugging, PyCharm is recommended but feel free to use your preferred IDE.
- Review the Clean-Code-Guidelines.md document for best practices on writing clean, maintainable code.

---

Good luck, and don’t hesitate to reach out if you get stuck!
