"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondSell = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
// второй производный класс
class SecondSell extends AbstractSelling_1.AbstractSelling {
    //вызываем конструктор родительского класса `AbstractSelling`, передавая ему `product` и `amount`
    constructor(product, amount) {
        super(product, amount);
    }
    // переопределяем абстрактный метод для получения цены минус скидки 
    getPrice() {
        const totalPrice = this.product.price * this.amount; // общая цена товара без скидки
        if (this.amount >= SecondSell.saleCount) {
            const discount = 10; // фиксированная скидка в 10 %
            return Number((totalPrice - (totalPrice / 100) * discount).toFixed(2));
        }
        return Number(totalPrice.toFixed(2));
    }
}
exports.SecondSell = SecondSell;
SecondSell.saleCount = 3; // количество товаров для скидки в 10%
