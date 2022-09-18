// const cars = {
//     doors: 4,
//     color: "red",
//     brand: "Honda"
// }
// console.info(cars.doors);


document.forms[0].addEventListener("submit", e => {
    e.preventDefault();

    // const userName = e.target.elements.name.value;
    const age = Number(e.target.elements.age.value);
    const isLegalAge = age >= 18;

    const person = {
        userName: e.target.elements.name.value,
        isLegal: isLegalAge,
    }

    console.info(person);
})
// document.forms[0].addEventListener("submit", e => {
//     e.preventDefault();

//     // const userName = e.target[0].value;
//     // const userSurName = e.target[1].value;

//     const person = {
//         userName: e.target[0].value,
//         userSurName: e.target[1].value,
//     }

//     console.info(person);
// })
