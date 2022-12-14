// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
console.group('Вивести на сторінку в один рядок через кому числа від 10 до 20.');
let number = 10;
let result = '';
while (number < 21) {
    if (number === 20) {
        result += number;
    } else {
        result +=`${number},`;
    }
    number++;
    
}
console.groupEnd(result);

// 2. Вивести квадрати чисел від 10 до 20.
console.group('Вивести квадрати чисел від 10 до 20.');
for (let i = 10; i <= 20; i++) {
    console.log(i ** 2);
}
console.groupEnd();

// 3. Вивести таблицю множення на 7.
console.group('Вивести таблицю множення на 7.');
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${7} = ${i*7}`);
}
console.groupEnd();

// 4. Знайти добуток усіх цілих чисел від 15 до 35.
console.group('Знайти добуток усіх цілих чисел від 15 до 35.');
let mult = 1;
for (let i = 15; i < 36; i++) {
    mult = mult * i;
    console.log(mult);
}
console.groupEnd();

// 5. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
console.group('Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');
let sum = 0;
for (let i = 1; i < 501; i++) {
    sum = sum + i;
    if (i === 500) {
        console.log(sum / 500);
    }
}
console.groupEnd();

// 6. Вивести суму лише парних чисел в діапазоні від 30 до 80.
console.group('Вивести суму лише парних чисел в діапазоні від 30 до 80.');
let sum2 = 0
for (let i = 30; i < 81; i++) {
    if (i % 2 === 0) {
        sum2 = sum2 + i;
        console.log(sum2);
    }
}
console.groupEnd();
