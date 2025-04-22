const prices = [5, 35, 10, 45, 8];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}