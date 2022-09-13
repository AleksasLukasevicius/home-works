// 2 pratymas
document.querySelector("button.task-two").addEventListener("click", showName);

// 3 pratymas
function showName(){
    document.querySelector("p.task-three").textContent ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis hic et, sunt ullam architecto possimus enim suscipit voluptatem dolor ipsum facere! Ducimus veritatis quam soluta? Perferendis, ipsam. Corporis, assumenda impedit."
    alert("Alex");
}

// 4 pratymas
let counter = 0;

function showNumber(){
    counter ++;
    document.querySelector("h1").innerText = counter;
}
document.querySelector("button.task-four").addEventListener("click", showNumber);

// 5 pratymas
document.querySelector("p.task-five").addEventListener("copy", dontCopy);
function dontCopy(){
    event.preventDefault();
    alert("Don't copy");
}
// 6 pratymas
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
        }
document.querySelector("button.task-six").addEventListener("click", showRandomNumber );
function showRandomNumber(){
const randomNumber = generateRandomNumber();
document.querySelector("h1.task-six").innerText = randomNumber;
}
