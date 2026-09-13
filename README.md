# 🚀 DevStack

DevStack is a simple React project where users can explore different technologies and build their own development stack.

Users can add technologies to their stack, remove them, and view useful information about each technology.

---

## 🛠 Technologies Used

- React
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JavaScript
- JSON

---

## ✨ Features

### 1. Explore Technologies
Users can explore different technologies with information such as category, difficulty, rating, description, and badge.

### 2. Build Your Own Stack
Users can add technologies to their personal stack, remove individual technologies, or remove all selected technologies.

### 3. Responsive Design
The website is responsive and works properly on mobile, tablet, and desktop devices.

---

# 📘 React Questions

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.

It makes React code easier to read and helps us create UI elements.

Example:

```jsx
<h1>Hello World</h1>
```

---

## 2. What is the difference between props and state?

**Props** are used to send data like a augument from a parent component to a child component.

**State** is data that belongs to a component and can change and store the change.

Example:

```jsx
const [stack, setStack] = useState([]);
```

Here, `stack` is state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data inside a React component.

In this project, I used it to store:

- The technology list
- The loading status
- The selected technologies in the stack

Example:

```jsx
const [stack, setStack] = useState([]);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component loads.

I used it to fetch the technology data from the JSON file when the page loads.

Example:

```jsx
useEffect(() => {
  fetch("/data/technologies.json")
    .then((res) => res.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to uniquely identify each item in a list.

It helps React understand which item was added, removed, or changed.

Example:

```jsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

In this project, I used it to show a message when the stack is empty.

Example:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* selected technologies */}
  </div>
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

Example:

```jsx
<Stack
  stack={stack}
  handleRemove={handleRemove}
/>
```

Here, `stack` and `handleRemove` are passed to the child component.

A child can send something back by calling a function that was passed from the parent.

Example:

```jsx
<button onClick={() => handleRemove(technology.id)}>
  Remove
</button>
```

The function is created in the parent component, but the child component calls it.

---

## 👨‍💻 Author

Built as a React practice project.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
