// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    for (i = 0; i < array.length; i++) {
        const element = item;
        if (array.indexOf(array[i]) === element) {
            array.splice(element, 1);
        }
    }
    return array;
}
console.log(removeElement([1, 2, 3, 4, 5, 6, 7], 2));
