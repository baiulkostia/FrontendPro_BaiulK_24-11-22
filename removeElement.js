// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array) {
    if (array.indexOf(5) === 4) {
        array.splice(4, 1);
    } else {
        console.log('Not remove');
    }
    return array;
}
console.log(removeElement([1, 2, 3, 4, 5, 6, 7]));
