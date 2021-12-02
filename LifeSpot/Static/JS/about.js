let userName;
let comment;
let touchstartX;
let touchstartY;
let touchendX;
let touchendY;
let picElement = document.getElementsByClassName('pictureArea')[0];
let imgsArray = Array.prototype.slice.call(document.querySelectorAll('.pictureArea>img'));

function Comment() {
    this.valid = true;
    this.userName = prompt("Введите ваше имя")
    if (this.userName == null || this.userName == "") {
        this.valid = false
        return
    }

    this.text = prompt("Введите текст комментария")
    if (this.text == null || this.text == "") {
        this.valid = false
        return
    }

    this.date = new Date().toLocaleString()
}

function askComment() {
    let comment = new Comment();

    if (!comment.valid) {
        return;
    }

    let enableLikes = confirm('Разрешить оценивать отзыв?')

    if (enableLikes) {
        let review = Object.create(comment)
        review.rating = 0;

        writeReview(review)
    } else {
        writeReview(comment)
    }
}

const writeReview = review => {
    let likeCounter ="";

    if (review.hasOwnProperty('rating')) {

        let randomId = Math.floor(Math.random() * 10000);
        likeCounter += ` <button onclick="doLike(this.id);" id =“${randomId}”> ❤️ ${review.rating}</button> `;
    }

    document.getElementsByClassName('comments')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}

function doLike(buttonId) {
    let elem = document.getElementById(buttonId);
    let rating = parseInt(elem.innerHTML.split("❤️")[1]) + 1;
    elem.innerHTML = " ❤️ " + rating;
}

const writeComment = () => {
    let elem = document.getElementsByClassName('comments')[0];
    let postDate = new Date().toLocaleString();
    elem.innerHTML += `<div class="comment"><p>${postDate}</p><p>${userName}</p><p>${comment }</p></div>`;
}

picElement.addEventListener('mousedown', function (event) {
    event.preventDefault();
    touchstartX = event.pageX;
    touchstartY = event.pageY;
}, false);

picElement.addEventListener('mouseup', function (event) {
    touchendX = event.pageX;
    touchendY = event.pageY;
    console.log('touchendX = ' + touchendX);
    console.log('touchendY = ' + touchendY);
    handleGesture();
}, false);


function handleGesture() {
    if (touchendX < touchstartX) {
        previous();
    }

    if (touchendX > touchstartX) {
        next();
    }
}

function previous() {
    let currentIndex;
    let newIndex;

    for (let elem of imgsArray) {
        if (elem.style.opacity == "1") {
            currentIndex = imgsArray.indexOf(elem);
            if (currentIndex == 0) {
                newIndex = imgsArray.length - 1;
            } else {
                newIndex = currentIndex - 1;
            }
        }
    }

    imgsArray[currentIndex].style.opacity = '0';
    imgsArray[newIndex].style.opacity = '1';
}

function next() {
    let currentIndex;
    let newIndex;

    for (let elem of imgsArray) {
        if (elem.style.opacity == "1") {
            currentIndex = imgsArray.indexOf(elem);
            if (currentIndex == imgsArray.length - 1) {
                newIndex = 0;
            } else {
                newIndex = currentIndex + 1;
            }
        }
    }

    imgsArray[currentIndex].style.opacity = '0';
    imgsArray[newIndex].style.opacity = '1';
}