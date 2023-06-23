'use strict';

const text = {
    theory: "<div><a class='button' href='server.html'>▶ Что такое сервер на самом деле?</a></div><div><a class='button' href='infrastructure.html'>▶ Какие бывают виды ИТ-инфраструктуры?</a></div><div><a class='button' href='electricity.html'>▶ Как работает электричество?</a></div>",
    building: "<div><a class='button' href='server.html'>▶ Где искать комплектующие?</a></div><div><a class='button' href='infrastructure.html'>▶ Как собирать?</a></div><div><a class='button' href='electricity.html'>▶ Как обслуживать?</a></div>",
    zapaska: "<div><a class='button' href='server.html'>▶ Что за принцип такой?</a></div>",
    search: "<div><a class='button' href='server.html'>▶ Как искать причины неисправностей?</a></div><div><a class='button' href='infrastructure.html'>▶ Как устранять неисправности?</a></div>",
    tricks: "<div><a class='button' href='server.html'>▶ Разные трюки с гаджетами</a></div><div><a class='button' href='infrastructure.html'>▶ Мифы о компьютерах</a></div>",
};

let push = {};

function explanation(name, place) {
    if (push[place.id] == true) {
        hideExplanation(place); // если вставлено, скрываем
    } else if (push[place.id] == false) {
        showExplanation(place); // если скрыто, показываем
    } else {
        pasteExplanation(name, place); // если не определено, вставляем
    };
};

function hideExplanation(place) {
    document.getElementById('d' + place.id).classList.toggle('hide');
    push[place.id] = false;
};

function showExplanation(place) {
    document.getElementById('d' + place.id).classList.toggle('hide');
    push[place.id] = true;    
};

function pasteExplanation(name, place) {
    let element = document.createElement('div');
    element.className = 'explanation';
    element.id = 'd' + place.id;
    element.innerHTML = getText(name, place);
    place.after(element);
    push[place.id] = true;
};

function getText(name, place) {
    let modifiedText = text[name].replace(/underline\d/g, place.id + '$&' );
    return modifiedText; 
};