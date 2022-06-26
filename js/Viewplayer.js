console.log("hello");
const url = "json.json";
//fetch(url).then(res => res.json()).then(json => console.log(json));
const output = document.querySelector('.output');
const btn =document.querySelector('#btn');
btn.addEventListener('click',getData);

function getData(){
fetch(url).then(function (res) {
  return res.json()
}).then(function (json) {
  console.log(json)
})
}
// fetch(url).then(res => res.json()).then(json => {
//   console.log(json.books)
//   json.books.forEach(val => {
//     output.pname.innerHTML += val.title + '<br>';
//   })
// })