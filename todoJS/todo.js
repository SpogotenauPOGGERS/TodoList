const main = document.querySelector(".main");
const addButton = document.querySelector(".addTodo");
const space = document.querySelector(".todoSpace");
const modalBtn = document.querySelector(".modalBtn");
const popup = document.querySelector(".popupForm");
const editPopup = document.querySelector(".popupEditForm");
const todoName = document.querySelector(".todoName");
const todoName2 = document.querySelector(".todoName2");
const editText = document.querySelector(".popupTitle");
const saveChangesBtn = document.querySelector(".saveBtn");
const closePopup = document.querySelector(".closePopup");
const closePopup2 = document.querySelector(".closePopup2");

addButton.addEventListener("click", (e) => {
  popup.classList.add("open-popup");
  addButton.classList.add("todoBtnInModal");
  addButton.classList.remove("addTodo");
  let todos = document.querySelectorAll(".todos");
  todos.forEach((todo) => {
    todo.classList.add("todosInModal");
    todo.classList.remove("todos");
  });
  todoName.focus();
});

modalBtn.addEventListener("click", (e) => {
  popup.classList.remove("open-popup");
  addButton.classList.add("addTodo");
  let todos = document.querySelectorAll(".todosInModal");
  todos.forEach((todo) => {
    todo.classList.remove("todosInModal");
    todo.classList.add("todos");
  });
  addButton.classList.remove("todoBtnInModal");
  addButton.classList.add("addTodo");
  let todo = document.createElement("div");
  let todoText = document.createElement("p");
  todo.append(todoText);
  todo.addEventListener(
    "click",
    (e) => {
      console.log(text);
      todo.firstChild.innerHTML = `<s>${todo.firstChild.textContent}</s>`;
      todo.classList.remove("todos");
      todo.removeChild(editBtn);
      todo.classList.add("todosDone");
    },
    { once: true }
  );
  todo.classList.add("todos");
  let text = todoName.value;
  if (text != "") {
    todo.firstChild.innerText = text;
    todo.id = Date.now().toString();
    space.append(todo);
  }
  let editBtn = document.createElement("div");
  editBtn.innerText = "Edit";
  editBtn.classList.add("editBtn");
  todo.append(editBtn);
  editBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    editPopup.classList.add("open-popup");
    editPopup.id = e.target.parentElement.id;
    addButton.classList.add("todoBtnInModal");
    addButton.classList.remove("addTodo");
    let todos = document.querySelectorAll(".todos");
    todos.forEach((todo) => {
      todo.classList.add("todosInModal");
      todo.classList.remove("todos");
    });
    todoName2.focus();
  });
  todoName.value = "";
});

saveChangesBtn.addEventListener("click", (e) => {
  editPopup.classList.remove("open-popup");
  addButton.classList.add("addTodo");
  let todos = document.querySelectorAll(".todosInModal");
  todos.forEach((todo) => {
    if (todo.id === editPopup.id) {
      console.log(todo.id);
      let editText = todoName2.value;
      todoName2.value = "";
      if (editText != "") {
        todo.firstChild.innerText = editText;
      }
    }
    todo.classList.remove("todosInModal");
    todo.classList.add("todos");
  });
  addButton.classList.remove("todoBtnInModal");
  addButton.classList.add("addTodo");
});

closePopup.addEventListener("click", (e) => {
  editPopup.classList.remove("open-popup");
  addButton.classList.add("addTodo");
  let todos = document.querySelectorAll(".todosInModal");
  todos.forEach((todo) => {
    todo.classList.remove("todosInModal");
    todo.classList.add("todos");
  });
  addButton.classList.remove("todoBtnInModal");
  addButton.classList.add("addTodo");
});

closePopup2.addEventListener("click", (e) => {
  popup.classList.remove("open-popup");
  addButton.classList.add("addTodo");
  let todos = document.querySelectorAll(".todosInModal");
  todos.forEach((todo) => {
    todo.classList.remove("todosInModal");
    todo.classList.add("todos");
  });
  addButton.classList.remove("todoBtnInModal");
  addButton.classList.add("addTodo");
});
