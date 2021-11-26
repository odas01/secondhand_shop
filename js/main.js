'use strict';

//Thanh tìm kiếm
var inputElement = document.querySelector('.header-search-input');
var inputContent = document.querySelector('.header-search-content span');
var inputContentElement = document.querySelector('.header-search-content');
inputElement.oninput = function (e) {
   inputContent.innerHTML = `Tìm '${e.target.value}'`;
   inputContentElement.style.display = 'flex';
   if (!e.target.value) {
      inputContentElement.style.display = 'none';
   }
};
inputElement.onblur = function (e) {
   inputContentElement.style.display = 'none';
};

//Dropdown
var dropDownElement = document.querySelector('.dropdowns');
var menuIconElement = document.querySelector('.menu-mobile-icon');
var dropDownOverlayElement = document.querySelector('.dropdow-overlay');
var html = document.querySelector('html');

menuIconElement.onclick = function (e) {
   dropDownElement.style.display = 'block';
   html.style.overflow = 'hiddent'
};

dropDownOverlayElement.onclick = function (e) {
   dropDownElement.style.display = 'none';
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




