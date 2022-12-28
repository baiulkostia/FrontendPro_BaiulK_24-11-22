// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    if (array.indexOf(item) !== -1) {
        array.splice(item, 1);
    } else {
       return array.indexOf(item);
    }
    return array;
}
console.log(removeElement([1, 2, 3, 4, 5, 6, 7], 3));
