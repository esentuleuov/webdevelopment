
let counter = 0;

let images = document.querySelectorAll(".img");

setInterval(imageDisplay, 5000);

function imageDisplay() {
        images[counter].style.display = "none";

        counter++;
        
        if (counter == images.length) {
          counter = 0;
        }
        
        images[counter].style.display = "block";
      
}

 function userfield() {

    let userInput = document.querySelector(".userInput");

    let userLabel = document.querySelector(".userLabel");
     
    if (userInput.value.length == 0) {
        userLabel.style.transform = "translateY(0px)   scale(1, 1)";
    }
    else if (userInput.value.length >= 1) {
        userLabel.style.transform = "translateY(-10px)   scale(0.9, 0.9)";
    }
 }

 function passwordfield() {

    let passInput = document.querySelector(".passInput");

    let passLabel = document.querySelector(".passLabel");

    let showHide = document.querySelector(".showHide");
     
    if (passInput.value.length == 0) {
        passLabel.style.transform = "translateY(0px)   scale(1, 1)";
        showHide.style.display = "none";
    }
    else if (passInput.value.length >= 1) {
        passLabel.style.transform = "translateY(-10px)   scale(0.9, 0.9)";
        showHide.style.display = "inline";
    }
     
 }

 function loginClickable() {

    let passInput = document.querySelector(".passInput");

    let loginBtn = document.querySelector(".loginBtn");

    let userInput = document.querySelector(".userInput");

   
     if (passInput.value.length == 0 || userInput.value.length == 0) {
        loginBtn.disabled= true;
        loginBtn.style.backgroundColor = "#0094f669";
        loginBtn.style.cursor = "default";
    }
    if (passInput.value.length >= 6 && userInput.value.length > 1) {
        loginBtn.disabled= false;
        loginBtn.style.backgroundColor = "#0094f6";
        loginBtn.style.cursor = "pointer";
    }
    else if (passInput.value.length < 6 && userInput.value.length < 1) {
        loginBtn.disabled= true;
        loginBtn.style.backgroundColor = "#0094f669";
        loginBtn.style.cursor = "default";
    }
   
 }

 function passwordDisplay() {

    let passInput = document.querySelector(".passInput");

    let showHide = document.querySelector(".showHide");
     
    if (passInput.type === "password") {
        passInput.type = "text";
        showHide.innerHTML = "SHOW";
    }
    else{
        passInput.type = "password";
        showHide.innerHTML = "HIDE";
    }
 }