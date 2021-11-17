let userName;
let comment;

function askComment() {
    userName = prompt("Введите ваше имя");
    comment = prompt("Введите текст комментария");

    writeComment();
}

const writeComment = () => {
    let elem = document.getElementsByClassName('comments')[0];
    let postDate = new Date().toLocaleString();
    elem.innerHTML += `<div class="comment"><p>${postDate}</p><p>${userName}</p><p>${comment }</p></div>`;
}