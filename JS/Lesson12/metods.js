// const isLegalAge = true;
// console.info(isLegalAge);
// console.info(isLegalAge.toString);

// const milkPrice = 3;
// alert(Number.isInteger(milkPrice) ? "nereikia centu" : "reikes centu")
// alert(milkPrice.toFixed(2))



document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const price = Number(e.target.elements.price.value);
    const litrs = Number(e.target.elements.litrs.value);

    const totalPrice = price * litrs;

    const priceDisplay = document.createElement("h1");
    priceDisplay.textContent = totalPrice.toFixed(2) + " €";
    document.body.append(priceDisplay);
});