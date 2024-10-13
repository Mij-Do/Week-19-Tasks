// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }
  
// Needed Output
  
//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"

class Car {
    constructor (name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run () {
        return `${this.n} is Running`
    }
    stop () {
        return `${this.n} is Stopped`
    }
}

let carOne = new Car("Tesla", "CyperTruck", 1e6); 

console.log(carOne.n);
console.log(carOne.m);
console.log(carOne.p);
console.log(carOne.run());