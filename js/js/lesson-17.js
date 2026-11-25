//Задача 1

const number = +prompt("Напишите число: ", 0);

if (!isNaN(number)) {
	if (number % 2 == 0) {
		alert(`Число четное: ${number}`);
	} else {
		alert(`Число нечетное: ${number}`);
	}
} else {
	alert("Введите  ЧИСЛО!!!!");
}

//Задача 2

const age = 21;
let discount;
discount =
	age < 18 ? (discount = 10) : age <= 65 ? (discount = 20) : (discount = 30);
console.log(`Скидка:  ${discount} процентов`);

console.log("Расчет скидки через switch case -->");
// в скобках указал true
switch (true) {
	case age < 18:
		discount = 10;
		console.log(`Скидка:  ${discount} процентов`);
		break;
	case age <= 65:
		discount = 20;
		console.log(`Скидка:  ${discount} процентов`);
		break;
	case age > 65:
		discount = 30;
		console.log(`Скидка:  ${discount} процентов`);
		break;
	default:
		console.log("Что-то пошло не так!!");
}

//Задача 3

let username = prompt("Введите имя: ", "name");
let password = prompt("Введите пароль: ", 0);

if (
	(username == "admin" && password == 123456) ||
	(username == "user" && password == 123456)
) {
	console.log(` Имя: ${username} Пароль: ****** : Доступ разрешен`);
} else {
	console.log("Доступ запрещен!!!!");
}

//Задача 4
//4.1

const width = +prompt("Укажите вес посылки(в килограммах)");
const type = prompt("Укажите тип посылки: Стандарт, Экспресс, Премиум.");
let price;
let coefficient;

//4.2

if (width <= 0) {
	console.log(`Некорректный вес посылки: ${width}`);
} else {
	console.log(`Вес посылки: ${width} кг.`);
}

switch (type) {
	case "Стандарт":
		console.log(`Тип посылки: ${type}.`);
		break;
	case "Экспресс":
		console.log(`Тип посылки: ${type}.`);
		break;
	case "Премиум":
		console.log(`Тип посылки: ${type}.`);
		break;
	default:
		console.log(`Неверный тип доставки: ${type}`);
}

//4.3
price =
	width < 1
		? (price = 5)
		: width <= 5
			? (price = 10)
			: width > 5
				? (price = 15)
				: console.log("Не удалось посчитать стоимость, проверьте данные");
console.log(`Базовая стоимость доставки: ${price} $.`);

//4.4
switch (type) {
	case "Стандарт":
		coefficient = 1;
		break;
	case "Экспресс":
		coefficient = 1.5;
		break;
		212;
	case "Премиум":
		coefficient = 2;
		break;
	default:
		console.log(`Неверный тип доставки: ${type}`);
}

//4.5, 4.6
const total_cost = price * coefficient;

if (!isNaN(total_cost)) {
	alert(`Расчёт итоговой стоимости доставки: ${total_cost} $.`);
} else {
	alert(`Что-то пошло не так!`);
}
