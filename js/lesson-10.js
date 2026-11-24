// Задача 1
console.log("Задача 1:");

const firstName = "Kain";
const lastName = "Golovin";
const isStudent = true;
console.log(
	`Создал 3 переменные:(${typeof firstName}, ${typeof lastName}, ${typeof isStudent})`,
);

// Задача 2
console.log("Задача 2:");

const age = 21;
let currentYear = 2026;
let birthYear;
birthYear = currentYear - age;
console.log(`Год рождения студента: ${birthYear}`);

//Задача 3
console.log("Задача 3:");
console.log(
	`Меня зовут ${firstName} ${lastName}, мне ${age} год. Я ученик курса: ${isStudent}.`,
);

//Задача 4
console.log("Задача 4:");

let a = "123"; //строка
let b = +"456"; //число
let c = Number("789"); //число
let d = Boolean(0); //false
let e = Boolean(""); //false
let result = a + b + c + d + e;
//123 + 456 + 789 + false + false -> строка
console.log(`Значение result = ${result}`);
