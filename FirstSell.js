"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstSell = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
// первый производный класс
class FirstSell extends AbstractSelling_1.AbstractSelling {
    //вызываем конструктор родительского класса `AbstractSelling`, передавая ему `product` и `amount`
    constructor(product, amount) {
        super(product, amount);
    }
    // переопределяем абстрактный метод для получения цены минус скидки 
    getPrice() {
        const totalPrice = this.product.price * this.amount; // общая цена товара без скидки
        const discount = 10; // фиксированная скидка в 10 долларов
        return totalPrice - discount;
    }
}
exports.FirstSell = FirstSell;
