// 8 pratymas

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
    }
    const randomNumber = getRandomNumber();
    console.info(randomNumber);

    document.getElementById('one').addEventListener('click', () => randomNumber === 1 ? alert('Yes') : alert('No'));
document.getElementById('two').addEventListener('click', () => randomNumber === 2 ? alert('Yes') : alert('No'));
document.getElementById('three').addEventListener('click', () => randomNumber === 3 ? alert('Yes') : alert('No'));

// document.getElementById('one').addEventListener("click", showNumber );
// function showNumber(){
//     randomNumber === 1 ? alert('Yes') : alert('No');
//     alert(randomNumber);
// }
// document.getElementById("two").addEventListener("click", showNumber );
// function showNumber(){
//     randomNumber === 2 ? alert('Yes') : alert('No');
//     alert(randomNumber);
// }
// document.getElementById("three").addEventListener("click", showNumber );
// function showNumber(){
//     randomNumber === 3 ? alert('Yes') : alert('No');
//     alert(randomNumber);
// }
