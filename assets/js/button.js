const MM_top = document.querySelector('#MM_top_container');
const MM_bk = document.querySelector('#MM_bk_container');
const Act_btn = document.querySelector('#Act_btn');

  
document.querySelector('#all_act').addEventListener('click',function(){
  MM_top.classList.toggle('active');
  MM_bk.classList.toggle('active');
  Act_btn.classList.toggle('active');
})

document.querySelector('#Act_btn').addEventListener('click', function () {
  MM_top.classList.toggle('active');
  MM_bk.classList.toggle('active');
  Act_btn.classList.toggle('active');
})
