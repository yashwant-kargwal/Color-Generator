let change = document.querySelector(".btn");
let body = document.querySelector("body");
let code = document.querySelector("#code");
let div = document.querySelector("div");

function rdmclr(number) {
    return Math.floor(Math.random() * number );
}

function copy(){
    navigator.clipboard.writeText(code.innerText);
} 

change.onclick = () => {
    body.style.backgroundColor = `rgb(${rdmclr(255)},${rdmclr(255)},${rdmclr(255)})`;
    let el = body.style.backgroundColor;
    code.innerText = el;
}

div.onclick = () => {
    copy();
}