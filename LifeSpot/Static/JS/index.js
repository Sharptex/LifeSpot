let userData = new Map();
let age = 0;

function checkAge() {
    age = prompt("Введите ваш возраст");

    if (age < 18) {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
    else {
        alert("Приветствуем на LifeSpot! Текущее время: " + new Date().toLocaleString());
    }
}


function handleSession() {
    userData.set("userAgent", window.navigator.userAgent);
    userData.set("age", age);
    userData.set("sessionStart", new Date().toLocaleString());
}

function filter() {
    let inputText = inputFunction();
    let elementsVideo = document.getElementsByClassName('video-container');
    for (let element of elementsVideo) {
        let description = element.getElementsByTagName('h3')[0].innerText;

        if (description.toLowerCase().includes(inputText.toLowerCase())) {
            element.style.display = 'inline-block';
        } else {
            element.style.display = 'none';
        }
    }
}

let sessionLog = function printSession() {
    for (let result of userData) {
        console.log(result)
    }
}

function getInput() {
    return document.getElementsByTagName('input')[0].value;
}

//checkAge();


