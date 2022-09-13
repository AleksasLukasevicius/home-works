// function userName(){
//     alert("Alex");
// }
// userName();

// function getRandomNumber() {
//     let y = Math.floor(Math.random() * 5) + 1;
//     alert(y);
//     }
//     getRandomNumber();

// function getNamesSum(firstName, lastName){
//     firstName = prompt("Vardas", "Aleksas");
//     lastName = prompt("Pavardė", "Lukaševičius");
//     return firstName.length + lastName.length;
// }
// alert(getNamesSum());

// function showLetter(i){
//     const x = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     i = prompt("skacius");
//     return x[i];
// }
// alert(showLetter(0));

// function sumTwoNumber(n1,n2,oper){
//     n1 = +prompt('pirmas skaicius',2);
//     n2 = +prompt('antras skaicius',2);
//     switch(oper){
//         case 'sum':
//             return n1 + n2;
//             case 'sub':
//                 return n1-n2;
//                 case 'div':
//                     return n1/n2;
//                     case 'multi':
//                         return n1*n2
//                     }
// }
// alert(sumTwoNumber("","",'div'))


function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
        }
function squareNum(){
    y = prompt("skaicius", 3);
    return Math.pow(y, 2);
}
   alert(squareNum(getRandomNumber()));