function clicktglClass(e_name) {
  document.addEventListener('DOMContentLoaded', function () {
    for (let i in e_name) {
      e_name[i].addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
      })
    }
  })
}

const hbg_menu = document.querySelectorAll('.hbg_menu');
clicktglClass(hbg_menu)