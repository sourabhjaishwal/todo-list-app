const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const emptyMessage = document.getElementById("empty-message");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";

  if (todos.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  todos.forEach(function (todo) {
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    if (todo.completed) {
      listItem.classList.add("completed");
    }

    const todoContent = document.createElement("div");
    todoContent.classList.add("todo-content");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", function () {
      toggleTodo(todo.id);
    });

    const todoText = document.createElement("span");
    todoText.classList.add("todo-text");
    todoText.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      deleteTodo(todo.id);
    });

    todoContent.appendChild(checkbox);
    todoContent.appendChild(todoText);

    listItem.appendChild(todoContent);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  });
}

function addTodo(text) {
  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  todos.push(newTodo);

  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map(function (todo) {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }

    return todo;
  });

  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });

  saveTodos();
  renderTodos();
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText === "") {
    return;
  }

  addTodo(todoText);

  todoInput.value = "";
  todoInput.focus();
});

renderTodos();
