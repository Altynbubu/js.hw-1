/*Интернет-магазин занимается продажей различных сувениров и безделушек.
 Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, 
 запрашивающую у пользователя количество тех и других покупок, после чего
  выведите на экран общий вес посылки.*/

const suvenir = 75;
const bezdel = 112;
let colSuvenir = +prompt("количество сувенир:");
let colbezdel = +prompt("количество безделушка:");
let result = suvenir * colSuvenir;
let result2 = bezdel * colbezdel;

console.log(result);
console.log(result2);
console.log("Oбщий вес: " + (result + result2) / 1000 + "кг");