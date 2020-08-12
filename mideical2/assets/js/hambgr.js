const mobilemenu = document.querySelector('#MM_bk_container');
const container = document.querySelector('#container');
const cover = document.querySelector('.mm__cover');
const btn = document.getElementById('navOpen');

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('navOpen').addEventListener('click', function () {
    this.classList.toggle('active');
    // document.getElementById('MobileMenu').classList.toggle('active');
    mobilemenu.classList.toggle('active');
    container.classList.toggle('active');
    cover.classList.toggle('active');
  })
});

cover.addEventListener('click', function () {
  cover.classList.toggle('active');
  mobilemenu.classList.toggle('active');
  container.classList.toggle('active');
  btn.classList.toggle('active');
})