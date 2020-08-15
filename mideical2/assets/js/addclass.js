function togleClass(aug1,aug2,aug3) {
  document.addEventListener('DOMContentLoaded',function () {
    aug1.addEventListener('click',function(e) {
      e.preventDefault();
      this.classList.toggle('active');
      aug2.classList.toggle('active');
      aug3.classList.toggle('active');
    })
  })
}

// ============================================================
const linkproduct = document.querySelector('#Link__Product');
const container__section__product = document.querySelector('#container__section__product');

togleClass(
  linkproduct,
  container__section__product,
  mobilemenu
  );

const section__product__arrow = document.querySelector('#section__product__arrow');

togleClass(
  section__product__arrow,
  container__section__product,
  mobilemenu
  );
// ============================================================

// ============================================================
const linkbisiness = document.querySelector('#Link__Bisiness');
const container__section__bisiness = document.querySelector('#container__section__bisiness');

togleClass(
  linkbisiness,
  container__section__bisiness,
  mobilemenu
);

const section__bisiness__arrow = document.querySelector('#section__bisiness__arrow');
togleClass(
  section__bisiness__arrow,
  container__section__bisiness,
  mobilemenu
);
// ============================================================

// ============================================================
const linktraning = document.querySelector('#Link__Traning');
const container__section__traning = document.querySelector('#container__section__traning');

togleClass(
  linktraning,
  container__section__traning,
  mobilemenu
);

const section__traning__arrow = document.querySelector('#section__traning__arrow');
togleClass(
  section__traning__arrow,
  container__section__traning,
  mobilemenu
);
// ============================================================