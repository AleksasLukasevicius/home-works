import { createElementWithParams, populateTableBody } from "./createTable.js"

const createVIPCheckBox = (robots) => {
    const checkboxElement = createElementWithParams("input", { type: "checkbox", name: "VIP" });
    const checkboxElementLabel = createElementWithParams("label", { for: "VIP" });
    checkboxElementLabel.textContent = "VIP";

    const onVIPCheckboxClick = (event) => {
        const isChecked = event.target.checked;
        const tbodyElement = document.querySelector("tbody");

        tbodyElement.replaceChildren();

        if (!isChecked) {
            populateTableBody(robots, tbodyElement);            //rodyk visus

            return;
        }
        const VIPRobots = robots.filter((robot) => robot.vip);  //rodyk VIP

        populateTableBody(VIPRobots, tbodyElement);
    };

    checkboxElement.addEventListener("change", onVIPCheckboxClick);

    document.body.prepend(checkboxElement, checkboxElementLabel);
};

export { createVIPCheckBox };