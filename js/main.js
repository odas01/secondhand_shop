"use strict";

var searchInput = document.querySelector(".search-input");
var searchContent = document.querySelector(".search-content");
searchInput.oninput = function (e) {
  document.querySelector(
    ".search-content > p"
  ).textContent = `Tìm: ${e.target.value}`;
};

searchInput.onkeyup = function (e) {
  searchContent.style.display = "flex";
  e.target.onblur = function () {
    searchContent.style.display = "none";
  };
  switch (e.which) {
    case 13:
    case 27:
      searchContent.style.display = "none";
      break;
  }
};

//Danh mục
var dellProduct = document.getElementById("dell");
var asusProduct = document.getElementById("asus");
var acerProduct = document.getElementById("acer");
var lenovoProduct = document.getElementById("lenovo");
var msiProduct = document.getElementById("msi");

var dellItem = document.getElementsByClassName("dell-item");
var asusItem = document.getElementsByClassName("asus-item");
var acerItem = document.getElementsByClassName("acer-item");
var lenovoItem = document.getElementsByClassName("lenovo-item");
var msiItem = document.getElementsByClassName("msi-item");

asusProduct.addEventListener("click", function () {
  for (let index of asusItem) {
    index.style.display = "block";
  }
});
