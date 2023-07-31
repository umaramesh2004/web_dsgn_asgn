//creating an object using constructor function
function Car(make, model, year) {
    this.make = make ;
    this.model = model ;
    this.year = year ;
}
//creating instances (objects) of the Car class
const car1 = new Car("Toyoto","Corolla", 2022);
const car2 = new Car("Honda ","Civic ", 2021);

//Accessing object properties of car1 and car2
console.log(car1.make); //output: Toyoto
console.log(car1.model); //output: Corrola
console.log(car1.year); //output: 2022

console.log(car2.make); //output: Honda
console.log(car2.model); //output: Civic
console.log(car2.year); //output: 2021



