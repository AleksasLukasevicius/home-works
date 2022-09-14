const ageInput = document.getElementById("age");
const form = document.querySelector("form");
const priceDisplay = document.getElementById("price");

function handleFormSubmit(event) {
    event.preventDefault()
    const price = 6;
    const age = Number(ageInput.value);

    if (age >= 60) {
        priceDisplay.textContent = (1 / 3 * price);
    } else if (age <= 16) {
        priceDisplay.textContent = (0.5 * price);
    } else {
        priceDisplay.textContent = price;
    }
}

form.addEventListener("submit", handleFormSubmit);