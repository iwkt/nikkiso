const parentMenu = document.querySelectorAll('.mobile_menu__main > li > a');
for(let i = 0; i < parentMenu.length; i++) {
  parentMenu[i].addEventListener('click',function(e) {
    e.preventDefault();
    this.nextElementSibling.classList.toggle('inview');
  })
}