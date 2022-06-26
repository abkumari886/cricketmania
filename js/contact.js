const url = 'https://script.google.com/macros/s/AKfycbwIrTmXmMCtgC-1VVitPdm9cnqj7tLZV8m4BvR2wKDrm9cvxBw/exec';
const btn = document.querySelector('.btn');
const output = document.querySelector('.input-fields');
btn.addEventListener('click', sData);
 
function sData() {
  let val1 = document.querySelector('input[name="name"]').value ;
  let val2 = document.querySelector('input[name="email"]').value;
  let val3 = document.querySelector('input[name="phone"]').value;
  let val4 = document.querySelector('input[name="subject"]').value;
  let arr = [val1, val2, val3];
  let formData = new FormData();
  formData.append('data', JSON.stringify(arr));
  fetch(url, {
    method: 'POST'
    , body: formData
  }).then(function (rep) {
    return rep.json()
  }).then(function (data) {
    console.log(data);
  })
}