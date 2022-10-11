class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(other) {
        return this.age >= 20 ? `${this.name} is old enuogh to drink` : `${this.name} is not old enuogh to drink`
    }
}

const p1 = new Person("Petras", 16)
const p2 = new Person("Aleksas", 46)
console.info(p1.compareAge());
console.info(p2.compareAge());