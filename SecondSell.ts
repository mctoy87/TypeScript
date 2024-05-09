import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";


// второй производный класс
export class SecondSell extends AbstractSelling {
  static readonly saleCount:number = 3; // количество товаров для скидки в 10%
  //вызываем конструктор родительского класса `AbstractSelling`, передавая ему `product` и `amount`
  constructor(product:Product, amount: number) {
    super(product, amount);
  }
  // переопределяем абстрактный метод для получения цены минус скидки 
  getPrice(): number {
    const totalPrice = this.product.price * this.amount;// общая цена товара без скидки
    if (this.amount >= SecondSell.saleCount) {
      const discount:number = 10; // фиксированная скидка в 10 %
      return Number((totalPrice - (totalPrice / 100) * discount).toFixed(2));
    }
    return Number(totalPrice.toFixed(2));
  }
}