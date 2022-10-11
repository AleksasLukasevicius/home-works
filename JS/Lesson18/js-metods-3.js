const text = prompt("Your text", "Aleksas Lukaševičius");
const duplicateAllLetters = (text) => text.split('').map(element => element.match(/[a-z]/i) ? element.repeat(2) : element).join('');

console.log(duplicateAllLetters(text));