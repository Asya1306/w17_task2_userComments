'use strict';
const btn = document.querySelector('button');
const textareaCom = document.querySelector('textarea');
const arrComments = [];

btn.addEventListener('click', function() {
    //проверка на пустой коммент
    if (textareaCom.value == '') {
        alert('Поле пустое, введите комментарий')
    } else {
        arrComments.push(textareaCom.value)
    }
    textareaCom.value = '';
    //цикл-проверка на спам
    for (let i = 0; i < arrComments.length; i++){
        const hideViagra = arrComments[i].replace(/viagra/ig, '***');
        arrComments[i] = hideViagra;
        const hideXXX = arrComments[i].replace(/xxx/ig, '***');
        arrComments[i] = hideXXX;
    }
    //добавление коммента
    let commentArea = '';
    for (let i = 0; i < arrComments.length; i++) {
        commentArea += `<div>${arrComments[i]}</div>`;
    }
    document.getElementById('block_js_comment').innerHTML = commentArea;
})

