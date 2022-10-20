import { getTodos } from "./getTodos.js";

const tbody = document.querySelector("table#todo-list")

const addRow = (rowItem) => {
    const { title, completed } = rowItem;

    const rowElement = document.createElement("tr");
    const titleColumn = document.createElement("td");
    const completedColumn = document.createElement("td");
    const isCompletedCheckbox = document.createElement("input");

    isCompletedCheckbox.type = "checkbox";
    isCompletedCheckbox.checked = completed;

    titleColumn.textContent = title;

    completedColumn.append(isCompletedCheckbox);

    rowElement.append(titleColumn, completedColumn);

    tbody.append(rowElement);
}

const populateTable = async () => {
    const todos = await getTodos();

    todos.forEach(todoItem => addRow(todoItem)

    );
};

export { populateTable };