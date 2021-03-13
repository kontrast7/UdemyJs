'use strict';



// * переменные и операции
// let number = 4.6;
// * получим Infinity (бесконечность)
// console.log(4 / 0);
// * получим NaN математическая ошибка
// console.log("fsd" / 0);
// const persone = 'max';
// const bool = true;
// * undefined значит не определено
// let und;
// console.log(und);
// const obj = {
//     name: 'maxi',
//     age: 25,
//     isMarried: false
// };
// console.log(obj.name);




// * инициализуруем массив
// let arr = ['plun.png', 'orange.jpg', 'apple.bmp', 6, {}, [1, 3], 5];
// console.log(arr[2]);
// * запись ответа пользователя
// const result = confirm('ты тут?');
// console.log(result);
// ! + делает из str в int
// const answer = +prompt('18 есть?', '18');
// console.log(answer + 5);





// * запись в массив
// const answers = [];
// answers[0] = prompt('Имя?', '');
// answers[1] = prompt('Фамилия?', '');
// answers[2] = +prompt('Лет?', '');
// document.write(answers);
// * тип object у массива
// console.log(typeof(answers));




// * использование ковычек для соединения ссылок и тд
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);
// const user = 'max';
// alert(`hi ${user}`);




// * постфиксные
// let incr = 10,
//     decr = 10;
// console.log(incr++);
// console.log(decr--);
// * префиксные
// let incr = 10,
//     decr = 10;
// console.log(++incr);
// console.log(--decr);
// * остаток от деления
// console.log(5 % 2);
// * оперция сравнения bool 
// ! (== нестрогое равенство не сравниет типы данных)
// console.log(2 * 4 == '8');
// * оперция сравнения bool
//! (=== строгое равенство сравниет и типы данных)
// console.log(2 * 4 === '8');
// ! && И. Строго
// ! || Или. Хотя бы одно
// * !-опертор отрицания
// * != НЕ РАВНО
// const isChecked = true,
//   isClose = false;
// console.log(isChecked && !isClose);
// ? пример на операторы
// console.log(2 + 2 * 2 !== 6);


// ! Условия
// if (4 == 9) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// const a = 50;
// if (a < 49) {
//     console.log('err');
// } else if (a > 100) {
//     console.log('no');
// } else {
//     console.log('ok');
// }

// (a === 50) ? console.log('ok'): console.log('error');

// const b = 50;
// switch (b) {
//     case 49:
//         console.log('неверно');
//         break;
//     case 100:
//         console.log('неверно2');
//         break;
//     case 50:
//         console.log('верно');
//         break;
//     default:
//         console.log('если ничего не подошло');
//         break;
// }


// ! Циклы
//  let num = 50;
// ? while - 'пока наше условие не выполнено выполнять эти действия'
// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// ! Всегда выполняет DO потом проверяет while, если оно true то ещё раз выполняет do, пока в while не будет false
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);


// ! for
// * 1) задаём переменную или точку отсчета
// * 2) условие при котором код перестанет выполняться
// * 3) шаг 
// for (let i = 1; i < 10; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }



// ! локальные и глобальнеы переменные функции
// let num = 20;

// function showFirstMassage(text) {
//     console.log(text);
//     num = 21;
// }

// showFirstMassage('Hello');
// console.log(num);

// ! стрелочные функции
// const calc = (a, b) => a + b;
// const calc2 = (a, b) => {
//     return a + b;
// };


// ! МЕТОДЫ

// ? СТРОКИ
// const str = 'teSt';
// const arr = [1, 2, 3, 4, 5];
// console.log(str.length);
// console.log(arr.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);
// const fruit = "Some fruit";

// *  показывает с какого эмента начинается наш элмент поиска indexOf. Если не найдет вернет -1
// console.log(fruit.indexOf('fruit'));

//* Изменение строк
// const logg = "Hello world";
//* 1 аргумент указывает с какого индекса нам нужно начать обрезать, Если указываем только 1, с этого индекса и до конца. 2 аргумет заканчивать (нужно писать на 1 больше что бы всё попало в нашу строку).
//* если указать - то обрезать будет с конца
// console.log(logg.slice(6, 11));

//* не поддерживает отрицательные значения
// console.log(logg.substring(6, 11));
//* 1 аргумент - откуда начинать. 2 аргумент СКОЛЬКО отрезать.
// console.log(logg.substr(6, 11));

//? ЧИСЛА
// const num = 12.2;
//* округление до целого числа
// console.log(Math.round(num));
// const test = '13.2222px';
// console.log(parseInt(test));
//* остается только дробное число
// console.log(parseFloat(test));


//* функции выполняются не в линейном порядке, из за задержки
// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }
// function second() {
//     console.log(2);
// }
// first();
// second();


//! Callback функции будут выполнять всегда по порядку
// function lernJs(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }
// function done() {
//     console.log('DONE');
// }
// lernJs('JavaScript', done);





//! Обьекты

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1000,
//     colors: {
//         border: 'black',
//         bg: 'red',
//         bg2: 'red2'
//     },
//     makeTest: function () {
//         console.log('Teeest');
//     }
// };
// options.makeTest();


//* показать обьект внутри обьекта (либо использовать деструктиризацию)
// console.log(options['colors']['border']);


//! Деструктиризация обьектов
// const {border, bg, bg2} = options.colors;
// console.log(border);


//* показ элемента
// console.log(options.name);


//* удалить элемент
// delete options.name;
// console.log(options);


//! показать обьект
// console.log(Object.keys(options)); 


//* перебор обьекта (он показывает все вложенности обьекта)
// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);


//! ИЛИ ЖЕ ИСПОЛЬЗОВАТЬ (но он показывает только элементы массива без вложенностей)
// console.log(Object.keys(options).length);








//! МАССИВЫ И ПСЕВДОМАССИВЫ

const arr = [1, 2, 3, 9, 15];

//* удаление последнего элемента из массива
// arr.pop()

//* добавление элемента в конец массива
// arr.push(10);

//* перебор массива
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//? ещё 1 вариант перебора массива 
// for (let val of arr) {
//     console.log(val);
// }

//! метод forEach
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// console.log(arr);

//! Сортировка
//? правильная сортировка чисел
// const arr2 = [16, 2, 38, 9, 15];
// arr2.sort(compareNum);
// console.log(arr2);
// function compareNum(a, b) {
//     return a - b;
// }
//* сортировка строк
//const arr3 = ['aaa', 'bbb', 'www', 'rrr', 'ccc'];
// arr3.sort();
// console.log(arr3);


//! преобразование строки в массив
// const str = prompt("", "");
// const poducts = str.split(', ');
// console.log(poducts);
//* преобразование массива обратно в строку
// console.log(poducts.join('; '));

