// Створити функцію яка отримує два аргументи, і обидва є масивами.
// Функція повинна повернути масив елементів які не є спільними для обох масивів
// Якщо в функцію передано хочаб один не масив, а інший тип даних, вивести повідомлення в консоль і повернути пустий масив;

const arrFirst = ['Lviv', 'Dnipro', 'Ternopil', 'London'];
const arrSecond = ['Dnipro', 'Paris', 'York', 'Ternopil'];
const array = [];

function uniqFirst(arrFirst, arrSecond) {
    if (Array.isArray(arrFirst) && Array.isArray(arrSecond)) {
        console.log('Variables are arrays');
    } else {
        return console.log([]);
    }
    for (let i = 0; i < arrFirst.length; i++) {
        if (arrFirst.includes(arrSecond[i])) {
            array.push(arrFirst[i]);
        } 
    }
    for (let i = 0; i < arrSecond.length; i++) {
        if (arrSecond.includes(arrFirst[i])) {
            array.push(arrSecond[i]);
        } 
    }
    return array
}
console.log(uniqFirst(['Lviv', 'Dnipro', 'Ternopil', 'London'], ['Dnipro', 'Paris', 'York', 'Ternopil']));
