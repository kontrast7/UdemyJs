// "use strict";

//!___________________________________________________________________
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

//!___________________________________________________________________
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

//!___________________________________________________________________
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

//!___________________________________________________________________
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

//!___________________________________________________________________
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

//!___________________________________________________________________
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

//!___________________________________________________________________
//! Callback функции будут выполнять всегда по порядку
// function lernJs(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }
// function done() {
//     console.log('DONE');
// }
// lernJs('JavaScript', done);

//!___________________________________________________________________
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

//!___________________________________________________________________
//! МАССИВЫ И ПСЕВДОМАССИВЫ

// const arr = [1, 2, 3, 9, 15];

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

//! КОПИРОВАНИЕ ОБЬЕКТОВ И МАССИВОВ
//* без вложенных обьектов этот способ. Это поверхностная копия обьектов
// const numbers = {
//     a: 5,
//     b: 2,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;

// console.log(numbers);
// console.log(newNumbers);

//* метод Object.assign для копирования обьектов
// const add = {
//     d: 17,
//     t: 20
// };
//? копирует данные из add в numbers
// console.log(Object.assign(numbers, add));
//? копирует данные из add в пустой обьект, т.е. клонирует обьект
// console.log(Object.assign({}, add));

//! копирование масиивов  SLICE
// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();
// newArr[0] = '4';
// console.log(oldArr);
// console.log(newArr);

//? ... разворачивает структуру (СПРЭД оператор)
// const video = ['yotube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejornal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'fb'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 9];
// log(...num);

//* копирование массива через спрэд оператор
// const array = ['a', 'b'];
// const newArray = [...array];

//* копирование обьекта спрэд оператором
// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {
//     ...q
// };

//!___________________________________________________________________
//! ООП
// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const solider = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

//* устаревщая запись
// const john = {
//     health: 100
// };
// john.__proto__ = solider;

//* новая
// const john = Object.create(solider);
// Object.setPrototypeOf(john, solider);
// john.sayHello();

//!___________________________________________________________________
//! Преобразование
// console.log(typeof (+'5'));
// console.log(typeof (Number('8')));
// console.log(parseInt('15px', 10));
// console.log(typeof (String(5)));

//? BOOLEAN это всё false
//? 0   ''  null   nudefined  Nan

// let switcher = null;

// if (switcher){
//     console.log('hello bitch!');
// }

// switcher = 1;

// if (switcher){
//     console.log('hello bitch!');
// }

//!___________________________________________________________________
//! Задачки
//? если есть [] то он всё преобразует в строку
// const a = +"Infinity";
// console.log(a + 500);
// console.log("Ёжикa" > "яблоко");
//! И запинается на лжи
//! ИЛИ запинается на правде
// console.log(2 && 1 && null && 0 && undefined);
// console.log(0 || "" || 2 || undefined || true || falsе);

//!___________________________________________________________________
//! DOM
//! получение элемента по ID
// const box = document.getElementById('box');
// console.log(box);
//! получение всех элементов по классу (button, p, div, nav), на выходе будут записаны в псевдомассив
// const btns = document.getElementsByTagName('button');
// console.log(btns);
//! получение элемента из псевдомассива по индексу
//? если элемент будет один на странице указать его индекс [0]
// const btns2 = document.getElementsByTagName('button')[1];
// console.log(btns2);
//! получение всех элементов по классу который мы назвали
// const circles = document.getElementsByClassName('circle');
// console.log(circles);

//! более современные методы
//? в querySelectorAll есть метод ForEach
// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
//* показывает каждый элемент через forEach
// hearts.forEach(item => {
//     console.log(item);
// });
//? получение первого элемента по названию класса
// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

//!___________________________________________________________________
//! ФУНКЦИИ КОНСТРУКТОРЫ

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello ${name}`);
//     };
// }
//* добавляем сами свойства в наш обьект
// User.prototype.exit = function(name){
//     console.log(`User ${this.name} goON`);
// }
//* создаём обьекты
// const ivan = new User('Ivan', 25);
// const alex = new User('Alex', 18);
// ivan.hello();
// ivan.exit()
// console.log(ivan);
// console.log(alex);

//!___________________________________________________________________
//! Контекст вызова. THIS

// 1!
// function showThis(a, b) {
//   function sum() {
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

// 2!
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this);
//     }
// }
// obj.sum();

// 3!
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${name}`);
//   };
// }
// const ivan = new User("Ivan", 25);

//4!
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }
// const user = {
//   name: "John",
// };

// разница только в синтаксисе присвоение в данном случае SURNAME
// этими методами мы установили контекст вызова функции
// sayName.call(user, "SmithCall");
// sayName.apply(user, ["SmothApply"]);

// bind создаёт новую функцию
// function count(num) {
//   return this * num;
// };
// const double = count.bind(2);
// console.log(double(5));

//* 1) Обычная функция: this = window, но если use strict - undefined
// если у функции внутри функция и во внутренней использован THIS, все равно будет undefined или window. Т.к. обьект вызова потерялся
//* 2) Контекст у методов ОБЪЕКТА - САМ ОБЪЕКТ
//* 3) THIS в конструкторах и классах - это новый экземпляр объекта (в данном случае const ivan)
//* 4) Ручная привязка THIS: Call, Apply, Bind

// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log(this);
//? контекстом вызова будет сам элемент на котором произошло событие при использовании записи function, а не стрелочной
// });

// const obj = {
//   num: 5,
//   sayNumber: function () {
//     const say = () => {
//? при использовании стрелочной функции this будет ссылаться на своего родителя, т.е. функцию а потом на сам обьект и в консоли мы получим объект
//? если напишем this.num поулучим 5
//       console.log(this.num);
//     };
//     say();
//   }
// };
// obj.sayNumber();

//* другой синтаксис(не нужно использовать return если функция помещается в 1 строчку), так же если используется 1 аргумент, в данном случае А можно не писать скобки
// const double = a => a * 2;
// console.log(double(8));

//!___________________________________________________________________
//! КЛАССЫ

//? Концепция
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, width, text, bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

//   showMyProps() {
//     console.log(`Text: ${this.text}, color${this.bgColor}`);
//   }
// }

//? Экземпляры класса
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// const div = new ColoredRectangleWithText(25, 10, "hello", "red");
// div.showMyProps();
// console.log(div.calcArea());

// console.log(square.calcArea());
// console.log(long.calcArea());

//!___________________________________________________________________
//! REST

// const log = function (a, b, ...rest) {
//   console.log(a, b, rest);
// };

// log("bas", "rest", "operator", "usage", "heare");

// function calcOrDouble(number, basis = 2) {
//   console.log(number * basis);
// }
// calcOrDouble(3);

//!___________________________________________________________________
//! SET TIMEOUT
// const btn = document.querySelector(".btn_white");
// let timerId;
// let i = 0;

// btn.addEventListener("click", (e) => {
//   e.preventDefault;
//   //   const timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 2000);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log("fgdfgdf");
//   i++;
// }

//!___________________________________________________________________
// ! Клонирование обьекта
//     const persone = {
//         name: 'Alex',
//         tel: '+375298868846',
//         age: 25,
//         parants: {
//             namePar: 'Max',
//             agePar: 55
//         }
//     };

// const clone = JSON.parse(JSON.stringify(persone));
// clone.parants.namePar = 'asdas';
// console.log(persone);
// console.log(clone);
// });

//!___________________________________________________________________
//! PROMISE
// console.log("Запрос данных");

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Подготовка данных");

//     const product = {
//       name: "TV",
//       prise: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// req
//   .then((data) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.status = "order";
//         resolve(data);
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.error("Произошла ошибка");
//   })
//   .finally(() => {
//     console.log("finaly");
//   });

//* ещё про промисы

const test = time =>{
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
};

//* по очереди
// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

//* ждет окончиния всех промисов которые были переданы в масиив
Promise.all([test(1000), test(2000)]).then(()=>{
  console.log("All");
})
//* выполняет свои действия когда самый первый правильно отработал
Promise.race([test(1000), test(2000)]).then(()=>{
  console.log("Race");
})

//? ЭТО CALLBACK HELL, ТАК ДЕЛАТЬ НЕ НУЖНО
// console.log("Запрос данных");

// setTimeout(() => {
//   console.log("Подготовка данных");

//   const product = {
//     name: "TV",
//     prise: 2000,
//   };

//   setTimeout(() => {
//     product.status = "order";
//     console.log(product);
//   }, 2000);
// }, 2000);
//? ЭТО CALLBACK HELL, ТАК ДЕЛАТЬ НЕ НУЖНО

//! повторить
//? ... разворачивает структуру (СПРЭД оператор)
// const video = ['yotube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejornal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'fb'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 9];
// log(...num);

//* копирование массива через спрэд оператор
// const array = ['a', 'b'];
// const newArray = [...array];

//* копирование обьекта спрэд оператором
// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {
//     ...q
// };
