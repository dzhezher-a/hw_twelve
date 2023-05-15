// Начальный массив
const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Task 1

let positiveNumbers = [];
let sumOfPositiveNumbers = 0;

// Ищем положительные числа в массиве и их сумму
for (let i of array) {
  if (i > 0) {
    positiveNumbers.push(i);
    sumOfPositiveNumbers += i;
  }
}

// Выводим на экран
console.log(`Положительные числа: ${positiveNumbers}`);
console.log(`Сумма положительных чисел = ${sumOfPositiveNumbers}`);

// Task 2

//  Определяем наименьшее число в массиве
const minNumber = Math.min(...array);

// Определяем его позицию
const minNumberPosition = array.indexOf(minNumber);

// Выводим на экран
console.log(
  `Минимальным числом в массиве является: ${minNumber} и его порядковый номер: ${minNumberPosition}`
);

// Task 3

// Определяем наибольшее число в массиве
const maxNumber = Math.max(...array);

// Определяем его позицию
const maxNumberPosition = array.indexOf(maxNumber);

// Выводим на экран
console.log(
  `Максимальным числом в массиве является: ${maxNumber} и его порядковый номер: ${maxNumberPosition}`
);

// Task 4

let negativeNumbers = [];

// Ищем отрицательные числа в массиве
for (let i of array) {
  if (i < 0) {
    negativeNumbers.push(i);
  }
}

// Записываем количество отрицательных чисел
const amountOfNegativeNumbers = negativeNumbers.length;

// Выводим на экран
console.log(`Количество отрицательных чисел: ${negativeNumbers.length}`);

// Task 5

let arrayOfOddPositiveNumbers = [];

// Ищем нечётные положительные числа в массиве
for (let oddPositiveNumbers of array) {
  if (oddPositiveNumbers % 2 !== 0 && oddPositiveNumbers > 0) {
    arrayOfOddPositiveNumbers.push(oddPositiveNumbers);
  }
}

// Записываем количество нечётных положительные чисел
const amountOfOddPositiveNumbers = arrayOfOddPositiveNumbers.length;

// Выводим на экран
console.log(
  `Количество нечётных положительных чисел: ${amountOfOddPositiveNumbers}`
);

// Task 6

let arrayOfEvenPositiveNumbers = [];

// Ищем чётные положительные числа в массиве
for (let evenPositiveNumbers of array) {
  if (evenPositiveNumbers % 2 === 0 && evenPositiveNumbers > 0) {
    arrayOfEvenPositiveNumbers.push(evenPositiveNumbers);
  }
}

// Записываем количество нечётных положительных чисел
const amountOfEvenPositiveNumbers = arrayOfEvenPositiveNumbers.length;

// Выводим на экран
console.log(
  `Количество чётных положительных чисел: ${amountOfEvenPositiveNumbers}`
);

// Task 7

let sumOfEvenPositiveNumbers = 0;

// Ищём сумму чётных положительных чисел
for (let sum of arrayOfEvenPositiveNumbers) {
  sumOfEvenPositiveNumbers += sum;
}

// Выводим на экран
console.log(`Сумма чётных положитеных чисел: ${sumOfEvenPositiveNumbers}`);

// Task 8

let sumOfOddPositiveNumbers = 0;

// Ищём сумму нечётных положительных чисел
for (let sum of arrayOfOddPositiveNumbers) {
  sumOfOddPositiveNumbers += sum;
}

// Выводим на экран
console.log(`Сумма нечётных положитеных чисел: ${sumOfOddPositiveNumbers}`);

// Task 9

let productOfPositiveNumbers = 1;

// Ищём произведение положительных чисел
for (let factor of array) {
  if (factor > 0) {
    productOfPositiveNumbers *= factor;
  }
}

// Выводим на экран
console.log(
  `Произведением положительных чисел является: ${productOfPositiveNumbers}`
);

// Task 10

// Удаляем все элементы перед максимальным числом
for (let i = 0; array.length != 1; i++) {
  if (array[0] === maxNumber) {
    break;
  }
  array.shift(i);
}

// Удаляем все элементы после максимального числа
array.splice(1);

// Выводим на экран
console.log(array);
