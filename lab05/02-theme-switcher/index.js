/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");

function main() {
   buttons.forEach(button => {
      button.addEventListener("click", () => {
         body.classList = [button.id];
      });
   })
}





















window.onload = main;