//  Створити функцію, яка очікує аргументом масив та повертає випадковий елемент масива

function randomElement(array) {
    if (Array.isArray(array)) {
        let element = Math.floor(Math.random() * array.length);
        let randElem = array[element];
        return randElem
    }
    
}
console.log(randomElement([1, 8, -5, 6, 0, 10]));
