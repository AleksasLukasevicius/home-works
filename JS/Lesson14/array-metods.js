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

console.log(people.filter(x => x.age >= 18));

console.log(people.filter(x => x.age >= 18).map(user => user.name));

console.log(people.filter(x => x.age >= 18).map(user => user.name).sort());



const cars = [
    { carName: "Honda", year: 2002 },
    { carName: "Saab", year: 1998 },
    { carName: "Lada", year: 1976 },
    { carName: "Mitsubishi", year: 1992 },
    { carName: "MitsuVWbishi", year: 2006 },
    { carName: "Tesla", year: 2020 }
]

function showCarsByYear(carsByYear) {
    console.log(carsByYear.sort((a, b) => a.year - b.year))
    return { oldest: carsByYear[0].carName, youngest: carsByYear[carsByYear.length - 1].carName }
}

console.log(showCarsByYear(cars))