// Дано масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти добуток позитивних елементів.

const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

console.group('Знайти суму та кількість позитивних елементів.');
let sum = 0;
let positiveNum = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sum = sum + numbers[i];
        console.log(sum);
    }
    if (numbers[i] > 0) {
        positiveNum = positiveNum.concat(numbers[i]);
    }
}
console.log(positiveNum.length);
console.groupEnd();

console.group('Знайти мінімальний елемент масиву та його порядковий номер.');
let min = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    } 
}
console.log(`min = ${min}`);
console.log(`індекс min: ${numbers.indexOf(min)}`);
console.groupEnd();

console.group('Знайти максимальний елемент масиву та його порядковий номер.');
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    } 
}
console.log(`max = ${max}`);
console.log(`індекс max: ${numbers.indexOf(max)}`);
console.groupEnd();

console.group('Визначити кількість негативних елементів.');
let negativeNum = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negativeNum = negativeNum.concat(numbers[i]);
    }
}
console.log(negativeNum.length);
console.groupEnd();

console.group('Знайти добуток позитивних елементів.');
let mult = 1;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        mult = mult * numbers[i];
        console.log(mult);
        continue;
    }   
}
console.groupEnd();
