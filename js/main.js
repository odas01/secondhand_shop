'use strict';
//Dropdown
var dropDownElement = document.querySelector('.dropdowns');
var menuIconElement = document.querySelector('.menu-mobile-icon');
var dropDownOverlayElement = document.querySelector('.dropdow-overlay');
var html = document.querySelector('html');

menuIconElement.onclick = function (e) {
   dropDownElement.style.display = 'block';
   html.style.overflow = 'hidden'
};

dropDownOverlayElement.onclick = function (e) {
   dropDownElement.style.display = 'none';
   html.style.overflow = 'unset'
};


//Return
function scrollWindow() {
   Object.assign(returnHomeElement.style, {
      opacity: '1',
      display: 'block',
   });
}

var returnHomeElement = document.querySelector('.return-home');
window.addEventListener('scroll', scrollWindow);
returnHomeElement.addEventListener('click', function (e) {
   Object.assign(returnHomeElement.style, {
      opacity: '0',
      bottom: '100px',
   });
   window.removeEventListener('scroll', scrollWindow);
   setTimeout(function () {
      window.addEventListener('scroll', scrollWindow);
      returnHomeElement.style.bottom = '55px';
   }, 1500);
})




