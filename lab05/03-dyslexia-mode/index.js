/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

let dysButton = document.querySelector("#dyslexia-toggle");
let body = document.querySelector("body");

function main() {
  dysButton.addEventListener("click", () => {
    body.classList.toggle("dyslexia-mode")
  });
}






window.onload = main;