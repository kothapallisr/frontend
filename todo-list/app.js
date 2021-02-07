const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");

function addListItem() {
  todoInputEl.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      let newListItem = createListItem(todoInputEl.value);
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
      todoInputEl.value = "";
    }
  });
}

function createListItem(text) {
  let newListElement = document.createElement("li");
  newListElement.setAttribute("class", "todo__item");
  newListElement.textContent = text;
  return newListElement;
}

addListItem();

function toggleDone() {
  todoListEl.addEventListener("click", function (event) {
    if (event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done");
    }
  });
}

toggleDone();
