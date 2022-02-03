let content = document.querySelector(".content");
let header = document.querySelector("h1");

function changeFontSize(ele, delta) {
   let currSize = parseFloat(window.getComputedStyle(ele, null).getPropertyValue('font-size'))
   ele.style.fontSize = (currSize + delta).toString() + "px";
}

const makeBigger = () => {
   changeFontSize(content, 2);
   changeFontSize(header, 2);
};

const makeSmaller = () => {
   changeFontSize(content, -2);
   changeFontSize(header, -2);
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

