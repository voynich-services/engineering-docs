---
sidebar_label: Debugging Guide
sidebar_position: 7
---

# Debugging Guide

Debugging is not a sign that something went wrong — it's a core engineering skill. The faster you can locate a bug, the more effective you become as a developer. This guide gives you a repeatable mental model and concrete tools for debugging the FARM stack.

---

## The Mental Model: Follow the Data

When something doesn't work, resist the urge to randomly change code. Instead, trace the data flow from where it starts to where it breaks:

```
Browser (UI) → Network Request → FastAPI (backend) → MongoDB → back up the chain
```

At each step, ask: **is the data correct here?** The first step where data is wrong is where the bug lives.

---

## Tool 1: Browser DevTools — Network Tab

The Network tab shows you every HTTP request the browser makes and what the server returned. This is your first stop for any frontend issue.

**How to open it:**
- Chrome / Edge: `F12` → click the **Network** tab
- Firefox: `F12` → click the **Network** tab

**What to look for:**

1. Reload the page or trigger the action that's broken.
2. Find the API request in the list (filter by `Fetch/XHR` to reduce noise).
3. Click it. Check:
   - **Status code** — `200` means success, `4xx` means your request is wrong, `5xx` means the server crashed.
   - **Response tab** — the actual JSON the server sent back. Is it what you expected?

**Example:** If the Quotes page shows nothing, open DevTools, reload, find the `/api/quotes` request, and read the response. You'll see exactly what the backend returned — maybe it's an empty array, maybe it's an error, maybe only 5 items instead of 40.

---

## Tool 2: FastAPI / Uvicorn Logs

Every time a request hits your backend, uvicorn prints a log line. When something crashes, Python prints a full stack trace.

**Where to look:** The terminal where you ran `python app/main.py`.

**What to look for:**
- `GET /api/quotes 200` — request succeeded
- `GET /api/authors 500` — server error (look at the lines above for the Python traceback)
- A `TypeError` or `AttributeError` in the traceback tells you exactly which line of Python failed

**Tip:** Keep the backend terminal visible while you use the app in the browser. Watch for errors as you click around.

---

## Tool 3: MongoDB Compass

Compass lets you look directly inside your database — no code needed. This is essential for verifying whether the data is correct at the source.

**How to use it:**
1. Connect to `mongodb://localhost:27018`
2. Open the `voynich_quotes` database
3. Click on a collection to browse its documents

**What to check:**

| Symptom | What to verify in Compass |
|---|---|
| Authors page shows wrong data | Open the `authors` collection — what's actually in it? |
| Quote shows "Unknown" author | Check the `author_id` on that quote; does a matching `_id` exist in `authors`? |
| Only a few quotes appear | Count the documents in `quotes` — how many are there? |
| Tags are missing | Check the `tags` collection; does the `_id` match the `tag_ids` on the quote? |

**Pro tip:** Run the db seeder first (`python app/scripts/db_feeder.py`) and then verify all three collections have data before debugging anything else.

---

## Tool 4: PyCharm Debugger

When you need to inspect what's happening inside a Python function at runtime, a debugger is more powerful than `print()`. PyCharm Community Edition has a great one built in.

**How to set a breakpoint:**
1. Open the file in PyCharm
2. Click in the left gutter next to a line number — a red dot appears
3. Run the project in **Debug mode**: click the bug icon (not the play button)

**How to use it once paused:**
- **Variables panel** (bottom left): shows every variable in scope and its current value
- **Step Over (F8)**: run the next line
- **Step Into (F7)**: jump into a function call to follow it
- **Resume (F9)**: continue running until the next breakpoint

**Example:** Add a breakpoint inside `get_quotes()` in `routes/quotes.py`. When you load the quotes page in the browser, execution pauses there. Inspect `quotes_cursor` to see what MongoDB is about to return.

---

## Tool 5: React DevTools (Browser Extension)

React DevTools adds a **Components** tab to your browser DevTools. You can inspect any component's state and props in real time.

**Install:** Search "React DevTools" in your browser's extension store.

**What to use it for:**
- Check the current value of `useState` variables (e.g., is `quotes` an empty array or does it have data?)
- Verify that props are being passed correctly between components

---

## Common Patterns and What They Mean

| What you see | Where to look first |
|---|---|
| UI shows nothing / empty list | Network tab → check the API response |
| UI shows data but it looks wrong | Compass → verify the raw data in the collection |
| Backend returns 500 | Uvicorn terminal → read the Python traceback |
| Backend returns 404 "not found" | Check the URL path — is there a typo in the route? |
| Page is blank after navigating | Check the React Router route definitions in `App.jsx` |
| One item is wrong but others are fine | Inspect that specific document in Compass |

---

## A Debugging Session Example

Let's say the Authors page loads but shows something unexpected. Here's how to approach it:

1. **Browser DevTools → Network tab**: find the `GET /api/authors` request. Read the response JSON carefully. Does it contain author documents, or something else entirely?

2. **If the response data is wrong**: the bug is in the backend or database. Open Compass and look at the `authors` collection. What's actually stored there?

3. **If the collection looks wrong**: check how the backend queries it. Open `app/database.py` — what collection name does `authors_collection` point to?

4. **If the collection looks right but the query is wrong**: add a breakpoint in the route handler and inspect the variables.

5. **Fix it**, reload the page, verify the Network response is now correct.

---

## Checklist Before Asking for Help

Work through this before escalating:

- [ ] Have you read the uvicorn logs?
- [ ] Have you checked the Network tab response in DevTools?
- [ ] Have you verified the data is actually in MongoDB Compass?
- [ ] Have you re-read the error message carefully (the last line usually tells you exactly what's wrong)?
- [ ] Have you checked for typos in collection names, route paths, or field names?

If you've done all of that and are still stuck — reach out. That's what your mentor is for.
