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

const acd_childMenu = document.querySelectorAll('.child > a');
document.addEventListener('DOMContentLoaded', function () {
  for (let i = 0; i < acd_childMenu.length; i++) {
    acd_childMenu[i].addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('inview');
      this.nextElementSibling.classList.toggle('inview');
    })
  }
})

const acd_parentsMenu = document.querySelectorAll('.acd_p');
document.addEventListener('DOMContentLoaded', function () {
  for (let i = 0; i < acd_parentsMenu.length; i++) {
    acd_parentsMenu[i].addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('inview');
      this.nextElementSibling.classList.toggle('inview');
    })
  }
})

const sitemap_acd_parentsMenu = document.querySelectorAll('.site_a');
document.addEventListener('DOMContentLoaded', function () {
  for (let i = 0; i < sitemap_acd_parentsMenu.length; i++) {
    sitemap_acd_parentsMenu[i].addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('is-open');
      document.getElementById('sitemap_acd').classList.toggle('is-open');
    })
  }
})