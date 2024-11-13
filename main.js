const addInput = document.querySelector(".adding-div>input");
const addButton = document.querySelector(".adding-div>button");
const todosDiv = document.querySelector(".todos");
addButton.addEventListener("click", () => {
  let todo = document.createElement("div");
  let checkbox = document.createElement("input");
  let span = document.createElement("span");
  let button = document.createElement("button");

  todo.classList.add("todo");
  checkbox.setAttribute("type", "checkbox");
  span.textContent = addInput.value;
  button.classList.add("delete");
  button.textContent = "Delete";

  button.addEventListener("click", () => {
    todo.remove();
  });
  todo.append(checkbox, span, button);
  todosDiv.appendChild(todo);
});
