# JS Todo List

A simple and responsive Todo List application built using **HTML, CSS, and Vanilla JavaScript**.

The application allows users to add tasks, mark them as completed, delete tasks, and store their tasks in the browser's `localStorage`.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persist tasks using `localStorage`
- Automatically restore tasks after page refresh
- Dynamic DOM manipulation
- Form submission handling
- Responsive design
- Empty-state message when there are no tasks

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser localStorage API

## Project Structure

```text
js-todo-list/
│
├── assets
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

The application stores todos in a JavaScript array.

Each todo contains:

```javascript
{
    id: 123456789,
    text: "Learn JavaScript",
    completed: false
}
```

Whenever the todo list changes, the array is converted into JSON and stored in `localStorage`.

```javascript
localStorage.setItem("todos", JSON.stringify(todos));
```

When the application starts, the saved JSON data is converted back into a JavaScript array:

```javascript
JSON.parse(localStorage.getItem("todos"));
```

The tasks are then dynamically displayed on the page.

## Main Functions

### `saveTodos()`

Saves the current todo array to local storage.

```javascript
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
```

### `renderTodos()`

Updates the DOM and displays all current tasks.

### `addTodo()`

Creates a new todo object and adds it to the array.

### `toggleTodo()`

Changes the completion state of a todo.

### `deleteTodo()`

Removes a todo from the array.

## Running the Project

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a browser.
4. Add some tasks.
5. Refresh the page.
6. The tasks will still be available because they are stored in `localStorage`.

## Learning Objectives

This project demonstrates how to:

- Select HTML elements using JavaScript.
- Create HTML elements dynamically.
- Add event listeners.
- Handle form submission.
- Work with arrays and objects.
- Use `map()` and `filter()`.
- Update the DOM dynamically.
- Store data using `localStorage`.
- Convert JavaScript objects to JSON.
- Convert JSON back into JavaScript objects.
- Manage basic application state.

## Future Improvements

Possible improvements include:

- Edit existing tasks.
- Add task categories.
- Add due dates.
- Add priority levels.
- Add task filtering.
- Add search functionality.
- Add dark mode.
- Display task counters.
- Add animations.
- Add drag-and-drop task ordering.
