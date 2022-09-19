// const isLegalAge = true;
// console.info(isLegalAge);
// console.info(isLegalAge.toString);


// alert(Number.isInteger(milkPrice) ? "nereikia centu" : "reikes centu")
// alert(milkPrice.toFixed(2))



document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = e.target.elements.userName.value;
    const height = Number(e.target.elements.userHeight.value);

    if (Number.isInteger(height)) {
        const h1 = document.createElement("h1");
        h1.textContent = name.repeat(height);
        document.body.append(h1);
    } else {
        alert("Number is not integer")
    }
});