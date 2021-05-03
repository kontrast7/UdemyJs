'use strict';

//! ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ DOM
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'green';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 400px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});




//? создаем переменную в js
const div = document.createElement('div');

//? присваиваем этому div класс
div.classList.add('black');

//? добавляем в конец body
// document.body.append(div);

//? добавляем в конец родительского класса wrapper
wrapper.append(div);

//? вставка в начало
// wrapper.prepend(div);

//? вставка элемента перед первым div heart
// hearts[0].before(div);

//? вставка элемента после первого div heart
// hearts[0].after(div);

//? удаление первого элемента
// circles[0].remove();

//? замеена первого элемента на другой (div)
// hearts[0].replaceWith(div);

//? записываем содержимое внутрь div (можно записать HTML структуру)
// div.innerHTML = '<h1>Hello bitch!</h1>';
// div.insertAdjacentHTML('beforebegin', '<h2>Motherfucker</h2>');

//? записывает содержимое без HTML структуры
// div.textContent = '<h1>Hello bitch!</h1>';
