'use strict';

//MENU

const openBttn = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('header');

openBttn.addEventListener('click', function () {
  header.classList.toggle('nav-open');
  console.log(header.classList);
});
