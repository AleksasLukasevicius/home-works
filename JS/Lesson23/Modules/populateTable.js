import { getTodos } from "./getTodos.js";

const tbody = document.querySelector("table#todos")

const addRow = (newItem) => {
    const titleColumn = document.createElement("td");
    const completedColumn = document.createElement("td");
    const rowElement = document.createElement("tr");
    const completedCheckbox = document.createElement("input");

    titleColumn.textContent = newItem.title;
    // completedColumn.textContent = newItem.completed;
    completedCheckbox.type = "checkbox";
    completedCheckbox.checked = newItem.completed;

    completedColumn.append(completedCheckbox);
    rowElement.append(titleColumn, completedColumn);
    tbody.append(rowElement);
}

const populateTable = async () => {
    const todos = await getTodos();
    console.info({ todos })

    todos.forEach(todoItem => addRow(todoItem)
    );
};

export { populateTable };