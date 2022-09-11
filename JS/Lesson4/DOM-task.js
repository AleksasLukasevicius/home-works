// document.body.innerHTML = "<h2>Alex</h2>"
// const name = 'Alex';
// const h2 = document.createElement('h2');
// h2.textContent = name;
// document.body.append(h2);

// document.getElementById("name").textContent = "Alex";
const name = 'Alex';
document.getElementById('name').textContent = name;

document.querySelector("li:last-child").textContent = "Sūris";

document.querySelector(".bluetext span").textContent = "blue";

const firstListItem = document.querySelector('li:first-child');
const secondListItem = document.querySelector('li:nth-child(2)');

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;
