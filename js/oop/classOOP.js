class Car {
  static description = "opis classu avto";

  constructor({ brand, model, price } = {}) {
    this._brand = brand;
    this._model = model;
    this._price = price;
  }
  getBrand() {
    return this._brand;
  }
  get Price() {
    return this._price;
  }
set price(newPrice) {
    this._price = newPrice;
}
set model(newModal) {
    this._model = newModal;
}
}
const car1 = new Car({ brand: "ada0", model: "sdd", price: "232333" });
const car2 = new Car({ brand: "adadas", model: "dsdsdd", price: "1111" });

console.log(car1.brand);
console.log(car1.price)
car1.price = 30000;
console.log(car1.price)
car1.model = 'sdsd';
console.log(car1.model)