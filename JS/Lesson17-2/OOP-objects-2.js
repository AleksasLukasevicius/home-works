class Car {
    constructor(brand, model, mileage, price, image) {
        this.brand = brand;
        this.model = model;
        this.mileage = mileage;
        this.price = price;
        this.image = image;
    }

    addToList() {
        const card = document.createElement('div');
        card.className = "card";
        card.addEventListener('click', () => alert(`Price: ${this.price}`));

        const img = document.createElement('img');
        img.src = this.image;

        const text = document.createElement('h6');
        text.innerText = `${this.brand} ${this.model}`;

        card.append(img, text);
        document.querySelector('div.wrapper').append(card)
    }
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const mileage = document.getElementById('mileage').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    const car = new Car(brand, model, mileage, price, image);
    car.addToList();
});