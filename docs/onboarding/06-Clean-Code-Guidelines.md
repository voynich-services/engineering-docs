---
sidebar_label: Clean Code Guidelines
sidebar_position: 6
---

# Clean Code Guidelines

Writing clean, readable, and maintainable code is a core skill for every software engineer. These guidelines will serve you well in any Python or React project throughout your career.

These aren't just rules — they're professional habits that make you a better developer.

---

## Setup: Code Quality Tools

Before writing code, always set up automated code quality checks:

### Python Projects
```bash
# Install pre-commit hooks
pip install pre-commit
pre-commit install

# Ruff handles linting and formatting (replaces black, isort, flake8, and more)
pip install ruff
```

### React/JavaScript Projects
```bash
# Install ESLint and Prettier (most projects come with these pre-configured)
npm install --save-dev eslint prettier
npm install --save-dev @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh

# Run linting and formatting
npm run lint
npm run format  # if available
```

This ensures consistent code style and catches common issues automatically.

---

## Universal Principles

### 1. Meaningful Naming

Use **descriptive names** that clearly indicate purpose:

```python
# ✅ Good
def calculate_monthly_payment(principal, interest_rate, months):
    return principal * (interest_rate / 12) * ((1 + interest_rate / 12) ** months)

user_email = "john@example.com"
is_email_valid = validate_email(user_email)

# ❌ Bad
def calc(p, r, m):
    return p * (r/12) * ((1 + r/12) ** m)

data = "john@example.com"
flag = check(data)
```

```jsx
// ✅ Good
const [userProfile, setUserProfile] = useState(null);
const [isLoading, setIsLoading] = useState(false);

const handleSubmitForm = () => { /* clear purpose */ };

// ❌ Bad
const [data, setData] = useState(null);
const [flag, setFlag] = useState(false);

const onClick = () => { /* unclear what this does */ };
```

### 2. Keep Functions Small and Focused

A function should do **one thing only**, and do it well:

```python
# ✅ Good - single responsibility
def validate_email(email):
    return "@" in email and "." in email

def send_welcome_email(user_email):
    if not validate_email(user_email):
        raise ValueError("Invalid email")
    # Send email logic here

# ❌ Bad - multiple responsibilities
def process_user(email):
    # Validation
    if not "@" in email or not "." in email:
        raise ValueError("Invalid email")
    # Database save
    save_to_database(email)
    # Email sending
    send_email(email)
    # Logging
    log_user_creation(email)
```

### 3. Avoid Magic Numbers and Hardcoded Values

Use constants and configuration:

```python
# ✅ Good
MAX_RETRY_ATTEMPTS = 3
DEFAULT_TIMEOUT = 30
API_BASE_URL = os.getenv("API_BASE_URL", "https://api.example.com")

def fetch_data(endpoint):
    for attempt in range(MAX_RETRY_ATTEMPTS):
        try:
            response = requests.get(f"{API_BASE_URL}/{endpoint}", timeout=DEFAULT_TIMEOUT)
            return response.json()
        except requests.RequestException:
            if attempt == MAX_RETRY_ATTEMPTS - 1:
                raise

# ❌ Bad
def fetch_data(endpoint):
    for attempt in range(3):  # Magic number
        try:
            response = requests.get(f"https://api.example.com/{endpoint}", timeout=30)
            return response.json()
        except requests.RequestException:
            if attempt == 2:  # Magic number
                raise
```

```jsx
// ✅ Good
const API_ENDPOINTS = {
  USERS: '/api/users',
  POSTS: '/api/posts'
};

const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100
};

// ❌ Bad
const response = await fetch('/api/users?limit=10'); // Hardcoded values
```

---

## Python Best Practices

### 1. Use Type Hints

```python
# ✅ Good - Modern Python 3.9+ built-in types
def get_user_by_id(user_id: int) -> dict[str, str] | None:
    """Fetch user data by ID."""
    # Implementation here
    pass

def process_items(items: list[str]) -> list[str]:
    """Process a list of items and return processed list."""
    return [item.upper() for item in items]

def get_user_settings(user_id: int) -> dict[str, str | int | bool]:
    """Get user settings with mixed value types."""
    # Implementation here
    pass

# ❌ Bad - no type hints
def get_user_by_id(user_id):
    # No one knows what this returns
    pass
```

### 2. Error Handling

```python
# ✅ Good - specific exceptions
def divide_numbers(a: float, b: float) -> float:
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def fetch_user(user_id: int) -> dict[str, any]:
    try:
        response = requests.get(f"/api/users/{user_id}")
        response.raise_for_status()
        return response.json()
    except requests.HTTPError as e:
        if e.response.status_code == 404:
            raise UserNotFoundError(f"User {user_id} not found")
        raise APIError(f"Failed to fetch user: {e}")

# ❌ Bad - bare except
def fetch_user(user_id):
    try:
        response = requests.get(f"/api/users/{user_id}")
        return response.json()
    except:  # Too broad
        return None
```

### 3. List Comprehensions and Generator Expressions

```python
# ✅ Good - readable and efficient
active_users = [user for user in users if user.is_active]
user_emails = [user.email for user in active_users]

# For large datasets, use generators
def process_large_dataset(items):
    return (expensive_operation(item) for item in items if item.is_valid)

# ❌ Bad - verbose loops
active_users = []
for user in users:
    if user.is_active:
        active_users.append(user)
```

### 4. Context Managers

```python
# ✅ Good - automatic resource cleanup
def read_config_file(filename: str) -> dict[str, any]:
    with open(filename, 'r') as file:
        return json.load(file)

def database_transaction():
    with get_db_connection() as conn:
        with conn.transaction():
            # Database operations here
            pass

# ❌ Bad - manual resource management
def read_config_file(filename):
    file = open(filename, 'r')
    data = json.load(file)
    file.close()  # Easy to forget!
    return data
```

---

## React Best Practices

### 1. Component Structure and Hooks

```jsx
// ✅ Good - clear structure, proper hooks usage
import { useState, useEffect, useCallback } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch user');
      
      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!user) return <NotFound />;

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// ❌ Bad - mixed concerns, poor error handling
function UserProfile({ userId }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(setData);
  }, [userId]);

  return <div>{data ? data.name : 'Loading...'}</div>;
}
```

### 2. Event Handlers and State Updates

```jsx
// ✅ Good - clear handler names, proper state updates
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim()) {
      setTodos(prev => [...prev, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  }, [newTodo]);

  const handleToggleTodo = useCallback((id) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  return (
    <div>
      <input 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => handleToggleTodo(todo.id)}
          onDelete={() => handleDeleteTodo(todo.id)}
        />
      ))}
    </div>
  );
}
```

### 3. Custom Hooks for Reusable Logic

```jsx
// ✅ Good - extract reusable logic
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage in components
function UserList() {
  const { data: users, loading, error } = useApi('/api/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## General Best Practices

### 1. Code Comments

Comment the **why**, not the **what**:

```python
# ✅ Good - explains reasoning
# Using exponential backoff to avoid overwhelming the API during retries
def retry_with_backoff(func, max_attempts=3):
    for attempt in range(max_attempts):
        try:
            return func()
        except APIRateLimitError:
            # Wait exponentially longer between retries
            sleep_time = 2 ** attempt
            time.sleep(sleep_time)

# ❌ Bad - describes what code already shows
# Loop through attempts
for attempt in range(max_attempts):
    # Try to call function
    try:
        return func()
```

### 2. Testing Your Code

```python
# Always write testable code
def calculate_discount(price: float, discount_percent: float) -> float:
    """Calculate discounted price."""
    if discount_percent < 0 or discount_percent > 100:
        raise ValueError("Discount must be between 0 and 100")
    return price * (1 - discount_percent / 100)

# Easy to test
def test_calculate_discount():
    assert calculate_discount(100, 10) == 90
    assert calculate_discount(100, 0) == 100
    
    with pytest.raises(ValueError):
        calculate_discount(100, -5)
```

### 3. Git Best Practices

Use clear, descriptive commit messages:

```bash
# ✅ Good - descriptive and categorized
git commit -m "feat: add user authentication system"
git commit -m "fix: resolve memory leak in image processing"
git commit -m "refactor: extract database connection logic"
git commit -m "docs: update API documentation"

# ❌ Bad - unclear purpose
git commit -m "update"
git commit -m "fixes"
git commit -m "changes"
```

---

## Code Review Checklist

Before submitting any code:

- [ ] **Meaningful names** for variables, functions, and classes
- [ ] **Functions are small** and do one thing well
- [ ] **No hardcoded values** - use constants or config
- [ ] **Proper error handling** with specific exceptions
- [ ] **Code is formatted** consistently (use automated tools)
- [ ] **No unused imports** or dead code
- [ ] **Comments explain why**, not what
- [ ] **Tests pass** and new features are tested
- [ ] **Commit messages** are clear and descriptive

---

## Useful Resources

**General Clean Code:**
- [Clean Code Summary](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29) by Robert C. Martin
- [Code Complete](https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670) by Steve McConnell

**Python:**
- [PEP 8 – Python Style Guide](https://peps.python.org/pep-0008/)
- [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html)
- [Real Python Best Practices](https://realpython.com/tutorials/best-practices/)

**React/JavaScript:**
- [React Documentation](https://react.dev/)
- [JavaScript Standard Style](https://standardjs.com/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [React Best Practices](https://react.dev/learn/thinking-in-react)

Remember: Clean code is not about perfection — it's about **clarity, maintainability, and respect for your future self and teammates**.

---

## Contributing to This Documentation

Found something unclear, outdated, or missing? **Help improve this guide for future developers!**

As you work through these guidelines, you might:
- Discover better examples or clearer explanations
- Find outdated practices that need updating
- Notice missing topics that would be helpful
- Spot typos or formatting issues

**How to contribute:**

1. **Submit a pull request** to the [engineering-docs repository](https://github.com/voynich-services/engineering-docs) with your suggested changes
2. **Share feedback** with your mentor about what was confusing or helpful

Your contributions make this documentation better for everyone. Documentation is code too — it deserves the same care and continuous improvement!
