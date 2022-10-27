import { populateTableBody } from "./createTable.js";

const filterRobots = (state) => {
    const tbodyElement = document.querySelector("tbody");

    if (state.isVIPChecked) {
        state.robots = state.fetchedRobots.filter((robot) => robot.vip);
    } else {
        state.robots = [...state.fetchedRobots];
    }

    state.robots = state.robots.filter((robot) => robot.name.toLocaleLowerCase().includes(state.searchValue));  //filtroja pagal varda

    tbodyElement.replaceChildren();

    populateTableBody(state.robots, tbodyElement);
};


export { filterRobots };