'use strict';
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
//Dropdown
var dropDownElement = $('.dropdowns');
var dropDownBody = $('.dropdow-body');
var menuIconElement = $('.menu-mobile-icon');
var dropDownOverlayElement = $('.dropdow-overlay');
var htmlElement = $('html');

menuIconElement.onclick = (e)=> {
    dropDownElement.style.display = 'block';
    dropDownBody.style.width = '300px'
    htmlElement.style.overflow = 'hidden';
};

dropDownOverlayElement.onclick = (e)=> {
    dropDownElement.style.display = 'none';
    dropDownBody.style.width = '0'
    htmlElement.style.overflow = 'unset';
};

//Return
function scrollWindow() {
    Object.assign(returnHomeElement.style, {
        opacity: '1',
        display: 'block',
    });
}

var returnHomeElement = $('.return-home');
window.addEventListener('scroll', scrollWindow);
returnHomeElement.addEventListener('click', (e)=> {
    Object.assign(returnHomeElement.style, {
        opacity: '0',
        bottom: '100px',
    });
    window.removeEventListener('scroll', scrollWindow);
    setTimeout(() => {
        window.addEventListener('scroll', scrollWindow);
        returnHomeElement.style.bottom = '55px';
    }, 1500);
});
