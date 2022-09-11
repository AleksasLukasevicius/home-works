let x = Math.cos(0);
console.info(x);

let y = Math.floor(Math.random()* 6);
console.info(y);

let min = Math.ceil(5);
let max = Math.floor(12);
let z = Math.floor(Math.random() * (max - min + 1) + min); 
// The maximum is inclusive and the minimum is inclusive
console.info(z);

let randNumb = Math.floor(Math.random()* 2);
console.info(randNumb)
if (randNumb === 1){
    alert("You win");
   }   
   else {alert("You lose")
} 

