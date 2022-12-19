// Створити масив з 10 студентів.

// Додати 2 студенти в кінець масиву
// Додати 2 студенти на початок масиву
// Видалити останнього студента
// Видалити першого студента
// Користувач вводить імя студента, перевірити чи такий студент є масиві і вивести результат в консоль
// Створити ще один масив з існуючого, включивши в нього студентів починаючи з індекса 3 і закінчуючи індесом 6 включно ( 3,4,5,6)
// Створити ще один масив нових студентів(довжина 5), і обєднати існуючих студентів з новими у новий масив усі студенти. ДАЛІ ПРАЦЮЄМО З МАСИВОМ УСІ СТУДЕНТИ
// Видалити студента номер 4
// Замінити студента номер 6 на студента з ім'ям Іван
// Вививести усіх студентів у консоль у вигляді стрічки, студенти повинні бути розділені символом тире -
// УСІ ЗАВДАННЯ ПОВИННІ БУТИ ВИКОНАНІ У ОДНОМУ ФАЙЛІ

const students = ['Misha', 'Sveta', 'Roma', 'Vera', 'Masha', 'Anna', 'Vasia', 'Slava', 'Pavel', 'Katia'];

console.group('Додати 2 студенти в кінець масиву');
students.push('Lena', 'Dima');
console.log(students);
console.groupEnd();

console.group('Додати 2 студенти на початок масиву');
students.unshift('Sergei', 'Tania');
console.log(students);
console.groupEnd();

console.group('Видалити останнього студента');
students.pop();
console.log(students);
console.groupEnd();

console.group('Видалити першого студента');
students.shift();
console.log(students);
console.groupEnd();

console.group('Користувач вводить імя студента, перевірити чи такий студент є в масиві і вивести результат в консоль');
const nameStudent = prompt('Enter student name');
const included = students.includes(nameStudent);
console.log(`${nameStudent} is included ${included}`);
console.groupEnd();

console.group('Створити ще один масив з існуючого, включивши в нього студентів починаючи з індекса 3 і закінчуючи індесом 6 включно ( 3,4,5,6)');
const studentsSecond = students.slice(3, 7);
console.log(studentsSecond);
console.groupEnd();

console.group('Створити ще один масив нових студентів(довжина 5), і обєднати існуючих студентів з новими у новий масив усі студенти. ДАЛІ ПРАЦЮЄМО З МАСИВОМ УСІ СТУДЕНТИ');
const studentsThird = students.slice(7, 12);
const studentsNew = studentsSecond.concat(studentsThird);
console.log(studentsNew);
console.groupEnd();

console.group('Видалити студента номер 4');
studentsNew.splice(3, 1);
console.log(studentsNew);
console.groupEnd();

console.group('Замінити студента номер 6 на студента з ім\'ям Іван');
studentsNew.splice(5, 1, 'Ivan');
console.log(studentsNew);
console.groupEnd();

console.group('Вививести усіх студентів у консоль у вигляді стрічки, студенти повинні бути розділені символом тире -');
const lineStudentNew = studentsNew.join(' - ');
console.log(lineStudentNew);
console.groupEnd();
