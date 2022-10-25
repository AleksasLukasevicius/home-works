import { createElementWithParams, populateTableBody } from "./createTable.js"

const createVIPCheckBox = () => {
    const checkboxElement = createElementWithParams("input", { type: checkbox, name: "VIP" });

    const checkboxElementLabel = createElementWithParams("label", { for: "VIP" });
    checkboxElementLabel.textContent = "VIP";

    const onVIPCheckboxClick = (event) => {
        const isChecked = event.target.checked;
        const tbodyElement = document.querySelector("tbody");

        tbodyElement.replaceChildren()

        if (!isChecked) {
            //rodyk visus
            populateTableBody(robots, tbodyElement)
            return;
        }//rodyk VIP
        const VIPRobots = robots.filter((robot) => robot.vip);

        populateTableBody(VIPRobots, tbodyElement);
    };

    checkboxElement.addEventListener("change", onVIPCheckboxClick);

    document.body.prepend(checkboxElement, checkboxElementLabel);
};

export { createVIPCheckBox };