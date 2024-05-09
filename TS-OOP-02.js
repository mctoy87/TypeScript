"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const FirstSell_1 = require("./FirstSell");
const SecondSell_1 = require("./SecondSell");
// создает массив товаров
const products = [
    new Product_1.Product("Футболка", 5),
    new Product_1.Product("Рубашка", 8),
    new Product_1.Product("Бкрюки", 15),
    new Product_1.Product("Куртка", 35),
    new Product_1.Product("Стиральная машина", 1769),
    new Product_1.Product("Холодильник", 1998),
    new Product_1.Product("Телевизор", 1065),
    new Product_1.Product("Тостер", 97),
];
// создает из абстрактного класса массив товаров с количеством товара 
const firstSells = [
    new FirstSell_1.FirstSell(products[0], 3),
    new FirstSell_1.FirstSell(products[1], 3),
    new FirstSell_1.FirstSell(products[2], 2),
    new FirstSell_1.FirstSell(products[3], 1),
    new SecondSell_1.SecondSell(products[4], 3),
    new SecondSell_1.SecondSell(products[5], 1),
    new SecondSell_1.SecondSell(products[6], 1),
    new SecondSell_1.SecondSell(products[7], 5)
];
const sortedFirstSells = firstSells.sort((a, b) => a.compare(b));
// Каждый товар выводиться в консоль с примененной скидкой
for (const firstSell of firstSells) {
    console.log(`Product: ${firstSell.nameOfProduct.name}`);
    console.log(`Amount: ${firstSell.amountOfProduct}`);
    console.log(`Price with discount: ${firstSell.getPrice()}`);
    console.log("-------------------");
}
// const sell_1 = new FirstSell(product_1, 3);
// const totalPrice_1 = sell_1.getPrice(); // totalPrice будет равно (5 * 3 - 10) = 5
// console.log('totalPrice_1: ', totalPrice_1);
