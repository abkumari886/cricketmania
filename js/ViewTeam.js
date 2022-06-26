// const url ='https://www.reddit.com/r/test/top/.json?limit=5';
// const output= document.querySelector('.output');
// const btn = document.querySelector('#btn');
// btn.addEventListener('click',getData);

// function getData(){
//     fetch(url).then(function(rep){
//         return rep.json()
//     }).then(function(data){
//         console.log(data.data.children);
//         maheHTML(data.data.children);
//     })
// }

// function maheHTML(val){
//     output.innerHTML = "";
//     val.forEach(function(item){
//         console.log(item.data.title);
//         console.log(item.data.url);
//         console.log(item.data.subreddit);
//         let div = document.createElement('div');
//         div.innerHTML = `${item.data.title} <a href ="${item.data.url}" target="_blank">Link</a> ${item.data.subreddit}`;
//         output.appendChild(div);

//     })


// }
const url = "data.json";
const output = document.querySelector('.output');

let xHR = new XMLHttpRequest();
xHR.open('GET',url);
xHR.responseType='json';
xHR.onload = function(){
    console.log(xHR.response);
    let data = xHR.response;
    data.teams.forEach(function(val){
        output.tname.innerHTML += val.name + '<br>';
    })
}

xHR.send();
console.log(xHR);