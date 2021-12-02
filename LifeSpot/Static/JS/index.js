//let userData = new Map();
//let age = 0;

//let session = {
//    'sessionStart': new Date().toLocaleString(),
//    'userAgent': window.navigator.userAgent,
//    'age': prompt("Введите ваш возраст")
//}

let checkup = function (newLogin) {
    if (window.sessionStorage.getItem("age") < 18) {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
    else {
        if (newLogin) {
            alert("Приветствуем на LifeSpot! Текущее время: " + new Date().toLocaleString());
        }
    }
}

let sessionLog = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("sessionStart"))
    console.log('Клиент: ' + window.sessionStorage.getItem("userAgent"))
    console.log('Возраст: ' + window.sessionStorage.getItem("age"))
}


//function checkAge() {
//    if (session.age < 18) {
//        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
//        window.location.href = "http://www.google.com";
//    }
//    else {
//        alert("Приветствуем на LifeSpot! Текущее время: " + new Date().toLocaleString());
//    }
//}


function handleSession(checkup, sessionLog) {
    //userData.set("userAgent", window.navigator.userAgent);
    //userData.set("age", age);
    //userData.set("sessionStart", new Date().toLocaleString());

    if (window.sessionStorage.getItem("sessionStart") == null) {
        window.sessionStorage.setItem("sessionStart", new Date().toLocaleString())
    }

    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    if (window.sessionStorage.getItem("age") == null) {
        let input = prompt("Введите ваш возраст?");
        window.sessionStorage.setItem("age", input)
        checkup(true)
    } else {
        checkup(false)
    }

    sessionLog()

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

//let sessionLog = function printSession() {
//    //for (let result of userData) {
//    //    console.log(result)
//    //}

//    console.log('Начало сессии: ' + session.sessionStart)
//    console.log('Клиент: ' + session.userAgent)
//    console.log('Возраст: ' + session.age)
//}

//function getInput() {
//    return document.getElementsByTagName('input')[0].value;
//}

//checkAge();


