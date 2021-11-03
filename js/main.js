"use strict";

//Thanh tìm kiếm
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
