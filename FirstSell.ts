import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";


// первый производный класс
export class FirstSell extends AbstractSelling {
  //вызываем конструктор родительского класса `AbstractSelling`, передавая ему `product` и `amount`
  constructor(product:Product, amount: number) {
    super(product, amount);
  }
  // переопределяем абстрактный метод для получения цены минус скидки 
  getPrice(): number {
    const totalPrice = this.product.price * this.amount;// общая цена товара без скидки
    const discount = 10; // фиксированная скидка в 10 долларов
    return totalPrice - discount;
  }
}