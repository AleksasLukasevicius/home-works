// 1 pratymas

// const car = {
//     doors: 4,
//     color: "red",
//     brand: "Honda"
// }

// console.info(car.doors);


// 2 pratymas

// document.forms[0].addEventListener("submit", e => {
//     e.preventDefault();

//     const userName = e.target[0].value;
//     const userSurName = e.target[1].value;

//     const person = {
//         userName,
//         userSurName
//     }

//     console.info(person);
// })

// 3 pratymas

document.forms[0].addEventListener("submit", e => {
    e.preventDefault();

    const userName = e.target.elements.name.value;
    const age = Number(e.target.elements.age.value);

    const isLegalAge = age >= 18;

    const person = {
        userName,
        isLegal: isLegalAge,
    }

    console.info({ person });
});
