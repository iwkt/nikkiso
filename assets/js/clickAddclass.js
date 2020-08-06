const parentMenu = document.querySelectorAll('.mobile_menu__main > li > a');

document.addEventListener('DOMContentLoaded', function () {
  for(let i = 0; i < parentMenu.length; i++) {
    parentMenu[i].addEventListener('click',function(e) {
      e.preventDefault();
      this.classList.toggle('inview');
      this.nextElementSibling.classList.toggle('inview');
    })
  }
})

const acd_parentMenu = document.querySelectorAll('.acd_parents > li > a');

document.addEventListener('DOMContentLoaded', function () {
  for (let i = 0; i < acd_parentMenu.length; i++) {
    acd_parentMenu[i].addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('inview');
      this.nextElementSibling.classList.toggle('inview');
    })
  }
})