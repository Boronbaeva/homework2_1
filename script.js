
const name = "Бермет";
const age = 19;
const isStudent = true;
const emptyValue = null;
let undefinedValue;

console.log("Переменные:");

console.log("Имя:", name);
console.log("Тип имени:", typeof name);

console.log("Возраст:", age);
console.log("Тип возраста:", typeof age);

console.log("Студент:", isStudent);
console.log("Тип isStudent:", typeof isStudent);

console.log("Значение null:", emptyValue);
console.log("Тип null:", typeof emptyValue);

console.log("Значение undefined:", undefinedValue);
console.log("Тип undefined:", typeof undefinedValue);

const person = {
    name: "Бермет",
    age: 19,
    isStudent: true
};

console.log("\nИнформация о человеке:");

console.log(
    `Меня зовут ${person.name}, мне ${person.age} лет.`
);

const favorites = [
    "One Piece",
    "Death Note",
    "Jujutsu Kaisen",
    "Haikyuu!!",
    "Attack on Titan"
];

console.log("\nМои любимые произведения:");
console.log(favorites);
