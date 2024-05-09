
import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";
import { FirstSell } from "./FirstSell";
import { SecondSell } from "./SecondSell";

// создает массив товаров
const products: Product[] = [
  new Product("Футболка", 5),
  new Product("Рубашка", 8),
  new Product("Бкрюки", 15),
  new Product("Куртка", 35),
  new Product("Стиральная машина", 1769),
  new Product("Холодильник", 1998),
  new Product("Телевизор", 1065),
  new Product("Тостер", 97),
]

// создает из абстрактного класса массив товаров с количеством товара 
const firstSells: FirstSell[] = [
  new FirstSell(products[0], 3),
  new FirstSell(products[1], 3),
  new FirstSell(products[2], 2),
  new FirstSell(products[3], 1),
  new SecondSell(products[4], 3),
  new SecondSell(products[5], 1),
  new SecondSell(products[6], 1),
  new SecondSell(products[7], 5)
];
// сама ф-я сортировки по убыванию стоимости
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