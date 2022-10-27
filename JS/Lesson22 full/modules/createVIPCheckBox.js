import { createElementWithParams } from "./createTable.js"
import { filterRobots } from "./filterRobots.js";

const createVIPCheckbox = (state) => {
    const checkboxElement = createElementWithParams("input", { type: "checkbox", name: "Select VIP robots" });
    const checkboxElementLabel = createElementWithParams("label", { for: "Select VIP robots" });
    const checkboxElementForm = createElementWithParams("form", { name: "checkboxVIPform" });
    checkboxElementLabel.textContent = "Select VIP robots";

    const onVIPCheckboxClick = (event) => {
        const isVIPChecked = event.target.checked;

        state.isVIPChecked = isVIPChecked;

        filterRobots(state);
    };

    checkboxElement.addEventListener("change", onVIPCheckboxClick);

    checkboxElementForm.prepend(checkboxElement, checkboxElementLabel);

    document.body.prepend(checkboxElementForm);
};

export { createVIPCheckbox };