"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get nameOfProduct() {
        return this.name;
    }
    get amountOfProduct() {
        return this.price;
    }
    set nameOfProduct(name) {
        this.name = name;
    }
    set priceOfProduct(sum) {
        this.price = sum;
    }
}
exports.Product = Product;
