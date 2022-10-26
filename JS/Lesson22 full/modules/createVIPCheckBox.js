import { createElementWithParams, populateTableBody } from "./createTable.js"

const createVIPCheckBox = (robots) => {
    const checkboxElement = createElementWithParams("input", { type: "checkbox", name: "Select VIP robots" });
    const checkboxElementLabel = createElementWithParams("label", { for: "Select VIP robots" });
    const checkboxElementForm = createElementWithParams("form", { name: "checkboxVIPform" });
    checkboxElementLabel.textContent = "Select VIP robots";

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

    checkboxElementForm.prepend(checkboxElement, checkboxElementLabel);
    document.body.prepend(checkboxElementForm);
};

export { createVIPCheckBox };