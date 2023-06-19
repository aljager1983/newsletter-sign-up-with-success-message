const subsButton = document.querySelector(".button");
const successWindow = document.querySelector(".successWindow");
const main = document.querySelector("main");
const dismiss = document.querySelector(".dismissButton");
const inputText = document.getElementById("email");

const errorMsg = document.getElementById("errorMsg");
const emailRegex = 
 new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");


subsButton.addEventListener("click", function(){
    const emailer = document.getElementById("emailer");
    console.log("entered " + inputText.value);
    const isValidEmail = emailRegex.test(inputText.value);
    if(isValidEmail == true) {
        console.log("valid email")
        main.style.display = "none";
        successWindow.style.display = "flex";
        emailer.innerHTML = inputText.value;
    } else {
        console.log("invalid email");
        errorMsg.style.display = "block";
        inputText.style.backgroundColor = "#FFE8E6";
    }
    
    
});

dismiss.addEventListener("click", function() {
    location.reload();
})

