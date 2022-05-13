//меню гамбургер

const hamburger = window.document.querySelector('.hamburger');
const menu = window.document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
})

//слайдер

const girlLeft = window.document.querySelectorAll('.news__block-girl');
const girlRight = window.document.querySelectorAll('.news__block-women');
const slidePrev = window.document.querySelector('.news__slider-left');
const slideNext = window.document.querySelector('.news__slider-right');
const count = window.document.querySelector('.news__slider-count');
const textGirl = window.document.querySelector('.news__block-text');


let countNum = 0;

const textArray = ['Rio Curved Bralette', 'Denim Jacket in Traffic Jam', 'Gia Reversible Triangle Top']


function girlCount(countNum) {
    girlLeft.forEach((girl, i) => {
        if (countNum === i) {
            girl.classList.add('active');
            count.innerHTML = countNum +1;
        }
        
        else {
            girl.classList.remove('active');
        }
    });
}

function girlBig(countNum) {
    girlRight.forEach((girl, i) => {
        if (countNum === i) {
            girl.classList.add('active');
            count.innerHTML = countNum +1;
        }
        
        else {
            girl.classList.remove('active');
        }
    })
}

function descrText(countNum) {
    textGirl.innerHTML = textArray[countNum]
}


slideNext.addEventListener('click', () => {
    if (countNum < girlLeft.length-1) {
        countNum = countNum + 1;
        console.log(countNum);
        girlCount(countNum);
        girlBig(countNum);
        descrText(countNum);
    }
})

slidePrev.addEventListener('click', () => {
    if (countNum > 0) {
        countNum = countNum - 1;
        console.log(countNum);
        girlCount(countNum);
        girlBig(countNum);
        descrText(countNum);
    }
})
