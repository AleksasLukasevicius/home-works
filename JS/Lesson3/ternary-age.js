const clientAge = prompt("Kiek Jūms metų");
const legalAge = 18;

age = clientAge<0 || clientAge>120 ? "Invalid Age" : clientAge>=legalAge ? "Can Drive" : "Can't drive";

console.info(age);

