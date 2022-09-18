const userName = document.createElement('h1');
userName.textContent = "Alex";
userName.style.color = "red";
document.body.prepend(userName);

const cars = document.createElement("ul");
cars.textContent = "Cars";
cars.style.fontSize = "1.2rem";


const car1 = document.createElement("li");
car1.textContent = "Audi";

const car2 = document.createElement("li");
car2.textContent = "VW";

const car3 = document.createElement("li");
car3.textContent = "Audi";

document.body.append(cars);
document.querySelector("ul").append(car1, car2, car3);
