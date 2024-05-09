export class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get nameOfProduct():string {
    return this.name;
  }

  get amountOfProduct():number {
    return this.price;
  }

  set nameOfProduct(name:string) {
    this.name = name;
  }

  set priceOfProduct(sum:number) {
    this.price = sum;
  }
}