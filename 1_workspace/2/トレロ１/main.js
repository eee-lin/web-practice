const container = document.getElementById("cards-container");
const input = document.getElementById("input-todo");
const button = document.getElementById("add-button");

const getList = () => {
  const list = localStorage["list"] || "[]";
  return JSON.parse(list);
};

const setList = list => {
  const json = JSON.stringify(list);
  localStorage["list"] = json;
};

const updateList = modifier => {
  setList(modifier(getList()));
};

const updateView = () => {
  container.textContent = "";
  const list = getList();
  const fragment = document.createDocumentFragment();
  list.forEach((text, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const todoText = document.createElement("div");
    todoText.className = "todo";
    todoText.textContent = text;
    card.appendChild(todoText);

    const deleteButton = document.createElement("div");
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", () => {
      deleteTodo(index);
    });
    card.appendChild(deleteButton);

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
};

const addTodo = () => {
  updateList(list => {
    list.push(input.value);
    return list;
  });
  updateView();
};

const deleteTodo = index => {
  updateList(list => {
    list.splice(index, 1);
    return list;
  });
  updateView();
};

window.addEventListener("load", () => {
  updateView();
});
button.addEventListener("click", addTodo);
