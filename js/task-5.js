// 5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций:

//     - сумма a и b;

//     - разница между a и b;

//     - произведение a и b;

//     - частное от деления a на b;

//     - остаток от деления a на b;

//     - результат возведения числа a в степень b

let a = +prompt("Первое число:");
let b = +prompt("Второе число:");

console.log("сложение: ", a + b);
console.log("вычитание: ", a - b);
console.log("умножение: ", a * b);
console.log("деление: ", a / b);
console.log("остаток: ", a % b);
console.log("возведение в степень: ", a ** b);