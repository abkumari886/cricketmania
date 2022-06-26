const url = "data.json";
const output = document.querySelector('.output');

let xHR = new XMLHttpRequest();
xHR.open('GET',url);
xHR.responseType='json';
xHR.onload = function(){
    console.log(xHR.response);
    let data = xHR.response;
    data.players.forEach(function(val){
        output.Player.innerHTML += val.name + '<br>';
    })
}
xHR.send();
console.log(xHR);