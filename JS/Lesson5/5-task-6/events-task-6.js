// 6 pratymas
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
    console.info();
        }

document.querySelector("button").addEventListener("click", showRandomNumber );
function showRandomNumber(){
const randomNumber = getRandomNumber();
document.querySelector("h1").innerText = randomNumber;
}

 // function generateRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
//   }
  
//   document.querySelector('button').addEventListener('click', () => {
//     const randomNumber = generateRandomNumber();
//     document.querySelector('h1').innerText = randomNumber;
//   });