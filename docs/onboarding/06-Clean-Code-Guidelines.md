---
sidebar_label: Clean Code Guidelines
sidebar_position: 6
---

# Clean Code Guidelines

Writing clean, readable, and maintainable code is a core skill for every software engineer. This chapter gives you a lightweight but powerful set of guidelines to follow when contributing to this project.

These aren’t just rules — they’re habits that scale across any serious software project.

---

## 1. Meaningful Naming

- Use **descriptive names** that tell what the function/variable/class does.
- Prefer `get_author_by_id()` over `getData()` or `func1`.
- Use consistent naming patterns (e.g., snake_case for Python, camelCase for JS).

---

## 2. Keep Functions Small

- A function should do **one thing only**, and do it well.
- If it takes more than ~20 lines or does multiple tasks, split it.
- Example: Separate `fetch_data()`, `transform_data()`, and `render_data()`.

---

## 3. Avoid Magic Values

- Never hardcode values like URLs, IDs, or config flags.
- Put them in a `constants` file, or better yet, in the `.env`.

```javascript
// ❌ Don’t
const baseUrl = "http://localhost:8000/api";

// ✅ Do
const baseUrl = import.meta.env.VITE_API_URL;
```

---

## 4. Clean and Consistent Formatting

We use:

- `ruff` and `pre-commit` for backend Python formatting.
- `eslint` and `prettier` for frontend formatting.

Make sure to install and run pre-commit hooks (already explained in `02-Environment-Setup.md`).

---

## 5. Avoid Unused Code

- Delete commented-out code, unused imports, and logs before pushing.
- Don’t leave `console.log()` or `print()` in production logic.

---

## 6. Comment Wisely

- Don’t comment what the code already clearly says.
- Use comments to explain **why**, not **what**.

```
// ✅ Good
// Using `$regex` for case-insensitive partial matching in tag search

// ❌ Bad
// loop through tags
for (const tag of tags) { ... }
```
---

## 7. Follow the Existing Project Structure

- Don’t create new folders or modules unless necessary.
- Keep new features consistent with current patterns.

---

## 8. Test Your Changes

- Test the API with tools like Postman or VSCode REST Client.
- Check the frontend works visually and functionally.
- Run unit tests if they exist, or write a basic one for your feature.

---

## 9. Git Hygiene

- Use clear, descriptive commit messages (e.g., `feat: add random quote endpoint`).
- Don’t commit sensitive info or local DB dumps.
- Don’t push large assets or debug logs.

---

## 10. Ask for Feedback

You’re not alone. If you’re unsure, ask. Clean code is a team standard, not just a personal style.

---

Stick to these principles and you'll not only contribute clean code — you'll be building habits that make you a stronger engineer in the long run.


## Useful Links

- **Clean Code Summary** (by Robert C. Martin, aka Uncle Bob):  
  https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29

- **Clean Code JavaScript**:  
  https://github.com/ryanmcdermott/clean-code-javascript

- **Google Python Style Guide**:  
  https://google.github.io/styleguide/pyguide.html

- **PEP 8 – Python Style Guide**:  
  https://peps.python.org/pep-0008/

- **JavaScript Standard Style Guide**:  
  https://standardjs.com/

- **VSCode: Debugging Guide**:  
  https://code.visualstudio.com/docs/editor/debugging

- **JetBrains PyCharm: Debugging Python**:  
  https://www.jetbrains.com/help/pycharm/debugging-your-first-python-application.html


