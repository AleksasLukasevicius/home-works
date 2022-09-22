const people = [
    {
        name: "Petras",
        age: "18"
    },
    {
        name: "Jonas",
        age: 15
    },
    {
        name: "Antanas",
        age: 20
    },
    {
        name: "Urtė",
        age: 10
    },
    {
        name: "Diana",
        age: 25
    },
    {
        name: "Ieva",
        age: 16
    }
];

console.log(people.filter(x => x.age >= 18))
console.log(people.filter(x => x.age >= 18).map(user => user.name))

