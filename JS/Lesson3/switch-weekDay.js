// let weekDay = new Date().getDay();
// switch (weekDay) {
//   case 0:
//     weekDay = 'Sekmadienis';
//     break;
//   case 1:
//     weekDay = 'Pirmadienis';
//     break;
//   case 2:
//     weekDay = 'Antradienis';
//     break;
//   case 3:
//     weekDay = 'Trečiadienis';
//     break;
//   case 4:
//     weekDay = 'Ketvirtadienis';
//     break;
//   case 5:
//     weekDay = 'Penktadienis';
//     break;
//   case 6:
//     weekDay = 'Šeštadienis';
//     break;
// }
// console.log(weekDay);

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
console.info(day);

// const day = new Date();
// const options = { weekday: 'long'};
// let weekday = day.getDay();
// console.info(day);
// console.log(new Intl.DateTimeFormat('lt-LT', options).format(day));