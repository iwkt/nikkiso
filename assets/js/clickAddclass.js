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