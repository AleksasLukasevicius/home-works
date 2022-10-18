import { getToDos } from "./getToDos.js";

const tbody = document.querySelector("table#todos")


const addRow = (newItem) => {
    const titleColumn = document.createElement("td");
    const completedColumn = document.createElement("td");
    const rowElement = document.createElement("tr")
    const completedChecBox = document.createElement("input")

    titleColumn.textContent = newItem.title;
    completedChecbox.type = "checkbox";
    completedChecbox.checked = newItem.completed;

    completedColumn.append(completedChecbox) = newItem.completed;
    rowElement.append(titleColumn, completedColumn);
    tbody.append(rowElement);

}

const populateTable = async () => {
    const toDos = await getToDos();

    toDos.forEach(toDoItem => addRow(toDoItem)
    );

};

export { populateTable };