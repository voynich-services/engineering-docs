---
sidebar_label: Your First Feature
sidebar_position: 4
---


# Your First Feature

Now that you've successfully launched the project and fixed the initial bugs, it's time to get your hands dirty with real development.

This task is designed to help you get familiar with the codebase and contribute in a meaningful but guided way.

## Objective

You will implement a **specific assigned feature** that connects the backend and frontend. This will help you:

- Navigate and extend both FastAPI (backend) and React (frontend) codebases.
- Work with MongoDB data models.
- Write clean, modular code following existing conventions.

## Your Assigned Feature

You have been assigned **one specific feature** from the list below. Find your assigned feature and implement it following the requirements. Each feature is designed to be completed independently and includes both backend and frontend work.

### Feature Options

#### Feature 1: Random Quote Endpoint
**Backend:** Create a new endpoint `GET /quotes/random` that returns a single random quote from the database.

**Frontend:** Add a "Random Quote" button on the quotes page that fetches and displays a random quote when clicked.

**Skills:** API endpoints, database queries, React state management.

---

#### Feature 2: Quotes Pagination
**Backend:** Modify the `GET /quotes` endpoint to support pagination with query parameters `page` and `limit` (default: page=1, limit=10).

**Frontend:** Add pagination controls (Previous/Next buttons and page numbers) to the quotes page.

**Skills:** Query parameters, pagination logic, UI controls.

---

#### Feature 3: Author Biography Display
**Backend:** Add a `biography` field to authors and create endpoint `GET /authors/{id}/biography`.

**Frontend:** Create an author detail page that shows the author's biography when you click on their name.

**Skills:** Database schema, routing, detailed views.

---

#### Feature 4: Filter Quotes by Tag
**Backend:** Add endpoint `GET /quotes/by-tag/{tag_name}` to filter quotes by a specific tag.

**Frontend:** Add clickable tag chips on quotes that filter the list to show only quotes with that tag.

**Skills:** Filtering, query parameters, interactive UI.

---

#### Feature 5: Quote Search Bar
**Backend:** Create endpoint `GET /quotes/search?q={query}` that searches quotes by text content.

**Frontend:** Add a search input field that filters quotes in real-time as you type.

**Skills:** Text search, real-time filtering, debouncing.

---

#### Feature 6: Loading States
**Backend:** No changes needed.

**Frontend:** Add loading spinners/skeletons to all pages while data is being fetched from the API.

**Skills:** Async state management, UI/UX improvements.

---

#### Feature 7: Quote Favorites System
**Backend:** Add endpoints `POST /quotes/{id}/favorite` and `DELETE /quotes/{id}/favorite` plus `GET /quotes/favorites`.

**Frontend:** Add heart icons to quotes that users can click to favorite/unfavorite, plus a "Favorites" page.

**Skills:** POST/DELETE operations, local storage, icon states.

---

#### Feature 8: Add New Quote Form
**Backend:** Create `POST /quotes` endpoint to add new quotes with validation.

**Frontend:** Create a form page where users can submit new quotes with author and tags selection.

**Skills:** Form handling, validation, POST requests.

---

#### Feature 9: Quote Categories/Topics
**Backend:** Add `category` field to quotes and create `GET /quotes/categories` and `GET /quotes/by-category/{category}`.

**Frontend:** Add category filter dropdown on quotes page and display categories as badges.

**Skills:** Data modeling, dropdowns, filtering.

---

#### Feature 10: Author Statistics
**Backend:** Create endpoint `GET /authors/{id}/stats` that returns quote count and most used tags for an author.

**Frontend:** Display author statistics on the author detail page with charts or visual indicators.

**Skills:** Aggregation queries, data visualization.

---

#### Feature 11: Quote Sharing
**Backend:** Create endpoint `GET /quotes/{id}/share` that returns a shareable URL with quote metadata.

**Frontend:** Add share buttons to quotes that copy a shareable link to clipboard.

**Skills:** URL generation, clipboard API, social sharing.

---

#### Feature 12: Quote Length Filter
**Backend:** Add endpoint `GET /quotes/filter?min_length={min}&max_length={max}` to filter quotes by character count.

**Frontend:** Add length filter sliders/inputs on the quotes page.

**Skills:** Range filtering, form inputs, query parameters.

---

#### Feature 13: Recently Added Quotes
**Backend:** Add `created_at` timestamp to quotes and create endpoint `GET /quotes/recent?days={days}` (default: 7 days).

**Frontend:** Add a "Recent Quotes" section on the home page showing quotes added in the last week.

**Skills:** Timestamps, date filtering, dashboard widgets.

## Implementation Requirements

Each feature must include:

- **Backend:** New API endpoint(s) with proper error handling
- **Frontend:** New UI components or pages to interact with the feature
- **Testing:** Manual testing to ensure everything works end-to-end
- **Documentation:** Brief comment explaining what your new code does

## Development Tips

- Stick to existing project structure and naming conventions.
- Use the existing error handling patterns you see in the codebase.
- Follow the same API response format as existing endpoints.
- Use consistent React patterns (hooks, components structure).
- Test your feature thoroughly before submitting.

## Code Quality Expectations

Follow our clean code guidelines:

- Meaningful names for variables and functions.
- Small, composable functions.
- Minimal duplication.
- Clear and readable logic.
- Remove unused code, logs, or comments before committing.

The chapter titled [Clean Code Guidelines](./06-Clean-Code-Guidelines.md) will walk you through these expectations in detail.

## Completion Process

1. Test that the feature works end-to-end from both frontend and backend.
2. Create a pull request with a clear title: "Feature: [Feature Name]"
3. Include a brief description of what was implemented.
4. Request a code review.

Each feature is designed to be **completable in 2-3 days**. Focus on implementing a working solution rather than achieving perfection.
