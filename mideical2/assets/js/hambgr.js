const mobilemenu = document.querySelector('#MM_bk_container');
const container = document.querySelector('#container');
const cover = document.querySelector('.mm__cover');
const btn = document.getElementById('navOpen');

function hambgr(
  ClickBtnName, target_El1, target_El2, target_El3, target_El4,word) {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(ClickBtnName).addEventListener('click', function () {
      this.classList.toggle(word);
      document.querySelector(target_El1).classList.toggle(word);
      document.querySelector(target_El2).classList.toggle(word);
      document.querySelector(target_El3).classList.toggle(word);
      document.querySelector(target_El4).classList.toggle(word);
    })
  })
}

hambgr('#navOpen', '#MM_bk_container', '#container', '.mm__cover','#nav__mm__hdr','active') 

// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('navOpen').addEventListener('click', function () {
//     this.classList.toggle('active');
//     // document.getElementById('MobileMenu').classList.toggle('active');
//     mobilemenu.classList.toggle('active');
//     container.classList.toggle('active');
//     cover.classList.toggle('active');
//   })
// });


// hambgr('.mm__cover', '#MM_bk_container', '#container', '#navOpen', 'active')
const nav_hdr = document.getElementById('nav__mm__hdr');

cover.addEventListener('click', function () {
  cover.classList.toggle('active');
  mobilemenu.classList.toggle('active');
  container.classList.toggle('active');
  btn.classList.toggle('active');
  nav_hdr.classList.toggle('active');
  
})