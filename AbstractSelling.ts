import { Product } from "./Product";

export abstract class AbstractSelling {
  product: Product;
  amount: number; //количество единиц товара

  constructor(product: Product, amount: number) {
    this.product = product;
    this.amount = amount; // кол-во единиц товара
  }

  get nameOfProduct():Product {
    return this.product;
  }

  get amountOfProduct():number {
    return this.amount;
  }

  set nameOfProduct(name:Product) {
    this.product = name;
  }

  set amountOfProduct(sum:number) {
    this.amount = sum;
  }

  abstract getPrice():number;

  //  сравнивает покупки по убыванию стоимости с переданной покупкой из абстрактного класса
  compare(other: AbstractSelling):number {
    const thisPrice = this.getPrice(); // получим цену ТЕКУЩЕГО товара
    const otherPrice = other.getPrice(); // получим цену ДРУГОГО товара
    // сортировка по убыванию стоимости
    if (thisPrice > otherPrice) {
      return -1; // ТЕКУЩИЙ товар имеет больший приоритет, т.е. большая стоимость
    }  else if (thisPrice < otherPrice) {
      return 1; // other имеет больший приоритет
    } else {
      return 0; // стоимости равны
    };
  };
}