'use strict';

//! получение элемента по ID
const box = document.getElementById('box');
console.log(box);
//! получение всех элементов по классу (button, p, div, nav), на выходе будут записаны в псевдомассив
const btns = document.getElementsByTagName('button');
console.log(btns);
//! получение элемента из псевдомассива по индексу
//? если элемент будет один на странице указать его индекс [0]
const btns2 = document.getElementsByTagName('button')[1];
console.log(btns2);
//! получение всех элементов по классу который мы назвали
const circles = document.getElementsByClassName('circle');
console.log(circles);



//! более современные методы
//? в querySelectorAll есть метод ForEach
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
//* показывает каждый элемент через forEach
hearts.forEach(item => {
    console.log(item);
});
//? получение первого элемента по названию класса
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);