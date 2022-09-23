class Car {
    constructor(brand, model, engine, price) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.basePrice = price;

        this.turnOn = function () {
            alert(`Turn on ${this.brand}`);
        };

        this.getPrice = function () {
            let additionalPrice = 0
            if (this.engine === "eletctic") {
                additionalPrice = 10_000
            }
            else if (this.engine === "diesel") {
                additionalPrice = 5_000
            }
            return this.basePrice + additionalPrice;
        };
    }
}

const myCar = new Car("Honda", "Jazz", "diesel", 20_000);

const yourCar = new Car("VW", "Golf", "diesel", 25_000);

console.info(myCar.getPrice());
