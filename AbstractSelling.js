"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    constructor(product, amount) {
        this.product = product;
        this.amount = amount; // кол-во единиц товара
    }
    get nameOfProduct() {
        return this.product;
    }
    get amountOfProduct() {
        return this.amount;
    }
    set nameOfProduct(name) {
        this.product = name;
    }
    set amountOfProduct(sum) {
        this.amount = sum;
    }
    //  сравнивает покупки по убыванию стоимости с переданной покупкой из абстрактного класса
    compare(other) {
        const thisPrice = this.getPrice(); // получим цену ТЕКУЩЕГО товара
        const otherPrice = other.getPrice(); // получим цену ДРУГОГО товара
        // сортировка по убыванию стоимости
        if (thisPrice > otherPrice) {
            return -1; // ТЕКУЩИЙ товар имеет больший приоритет, т.е. большая стоимость
        }
        else if (thisPrice < otherPrice) {
            return 1; // other имеет больший приоритет
        }
        else {
            return 0; // стоимости равны
        }
        ;
    }
    ;
}
exports.AbstractSelling = AbstractSelling;
