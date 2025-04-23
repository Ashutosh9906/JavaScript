class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){   //No need to use functio keyword inside the class
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("pant", 22.5);
// Constructor will be called automatically just pass the argument

product1.displayProduct();
const total1 = product1.calculateTotal(salesTax);
console.log(`Total price(including tax) is: $${total1.toFixed(2)}`);

product2.displayProduct();
const total2 = product1.calculateTotal(salesTax);
console.log(`Total price(including tax) is: $${total2.toFixed(2)}`);