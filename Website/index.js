let numbers = [1, 2, 3, 4, 5];

numbers.forEach(power);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}
function power(element, index, array){
    array[index] = Math.pow(element, 2);
}
function display(element){
    console.log(element);// 1 2 3 4 5
}