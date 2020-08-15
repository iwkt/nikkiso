function clicktglClass(aug1) {
  document.addEventListener('DOMContentLoaded', function () {
    for (let i in aug1) {
      aug1[i].addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('inview');
        this.nextElementSibling.classList.toggle('inview');
      })
    }
  })
}

const parentMenu = document.querySelectorAll('.mobile_menu__main > li > a');
clicktglClass(parentMenu);

const acd_parentMenu = document.querySelectorAll('.acd_parents > li > a');
clicktglClass(acd_parentMenu);


const acd_childMenu = document.querySelectorAll('.child > a');
clicktglClass(acd_childMenu);

const acd_parentsMenu = document.querySelectorAll('.acd_p');
clicktglClass(acd_parentsMenu);

function clicktglClass3(aug1,aug2,aug3,Str_addClassName) {
  document.addEventListener('DOMContentLoaded', function () {
    aug1.addEventListener('click', function (e) {
      e.preventDefault();
      aug2.classList.toggle(Str_addClassName);
      aug3.classList.toggle(Str_addClassName);
    })
  })
}

const Acd0_ttl = document.querySelector('#Acd0_ttl');
const Acd1_ul = document.querySelector('#Acd1_ul');
document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    Acd0_ttl.addEventListener('click', function () {
    Acd1_ul.classList.toggle('inview');
  })
});

const Acd1_ttl1 = document.querySelector('#Acd1_ttl1');
const Acd2_ul_1 = document.querySelector('#Acd2_ul_1');
clicktglClass3(Acd1_ttl1, Acd2_ul_1, Acd1_ul,'acd2_1_open');

const Acd1_ttl2 = document.querySelector('#Acd1_ttl2');
const Acd2_ul_2 = document.querySelector('#Acd2_ul_2');
clicktglClass3(Acd1_ttl2, Acd2_ul_2, Acd1_ul, 'acd2_2_open');

const Acd1_ttl3 = document.querySelector('#Acd1_ttl3');
const Acd2_ul_3 = document.querySelector('#Acd2_ul_3');
clicktglClass3(Acd1_ttl3, Acd2_ul_3, Acd1_ul, 'acd2_3_open')
