// const name = prompt("Koks Jūsų vardas");
// let i=0;
// while(i<3){
//     console.info(name);
//     i++
// }

const nameClient = prompt("Koks Jūsų vardas");
let times = prompt("kiek kartu vardas")
let combo = "";
do {
    combo += nameClient;
    times--
}while(times>0)
console.log(combo);

