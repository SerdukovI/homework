// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

const displayTask = (task) => `Задача ${task}:`;
const ADMIN = "admin";
const PASSWORD = "123456";

//Задача 1:
console.log(displayTask(1));

function calculateFinalPrice(basePrice, discount, taxRate) {
	let priceDiscount = basePrice - discount;
	let priceTaxRate = priceDiscount * taxRate;
	let totalPrice = priceDiscount + priceTaxRate;
	return totalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(170, 50, 1.7));
console.log(calculateFinalPrice(65, 25, 2.5));

//Задача 2:
console.log(displayTask(2));

function checkAccess(username, password) {
	const examination =
		username === ADMIN && password === PASSWORD
			? "Доступ разрешен"
			: "Доступ запрещен";
	return examination;
}

console.log(checkAccess("admin", "123456"));

//Задача 3:
console.log(displayTask(3));

function getTimeOfDay(time) {
	switch (true) {
		case time >= 0 && time <= 5:
			return "Ночь";
		case time >= 6 && time <= 11:
			return "Утро";
		case time >= 12 && time <= 17:
			return "День";
		case time >= 18 && time <= 23:
			return "Вечер";
		default:
			return "Некорректное время";
	}
}

console.log(getTimeOfDay(23));
console.log(getTimeOfDay(6.5));
console.log(getTimeOfDay(12));

//Задача 4:
console.log(displayTask(4));

function findFirstEven(start, end) {
	if (start < end) {
		for (let i = start; i <= end; i++) {
			if (i % 2 === 0) {
				return i;
			}
		}
	} else if (start > end) {
		for (let i = start; i >= end; i--) {
			if (i % 2 === 0) {
				return i;
			}
		}
	} else return "Чётных чисел нет";
}

console.log(findFirstEven(5, 11));
console.log(findFirstEven(12, 9));
console.log(findFirstEven(7, 7));
