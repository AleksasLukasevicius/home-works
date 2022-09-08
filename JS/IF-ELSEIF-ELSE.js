// const legalAge = 20;
// const clientAge = prompt("Koks jūsų amžius?");

// if (clientAge >= legalAge) {
//     alert(`Pasiekęs ${legalAge}`);
// } else {
//     alert(`Nepasiekęs ${legalAge}`);
// }

// alert(age)

// const str = prompt("Koks jūsų vardas?");

// if (str.length > 6) {
//     alert("Ilgas vardas")
// }
// alert(`${str} is ${str.length} name units long`)


// const x = prompt("Koks jūsų amžius?");

// if (x > 100 || x < 0) {
//   alert("Invalid age")
// }
// else if (x >= 1 && x <= 18) {
//   alert("Child")
// }
// else if (x >= 19 && x <= 99) {
//   alert("Adult")
// }

const car = prompt("Koks jūsų auto?");

if (car === "VW" || car === "Audi" || car === "Bentley" || car === "Bugatti" || car === "Lamborghini" || car === "Porsche") {
    alert("priklauso VW group")
}
else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
    alert("priklauso BMV")
}
else {
    alert("niekam nepriklauso")
}
