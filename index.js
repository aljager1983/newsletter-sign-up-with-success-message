const subsButton = document.querySelector(".button");
const successWindow = document.querySelector(".successWindow");
const main = document.querySelector("main");
const dismiss = document.querySelector(".dismissButton");
const inputText = document.getElementById("email");

const emailRegex = 
 new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");


subsButton.addEventListener("click", function(){
    
    console.log("entered " + inputText.value );
    const isValidEmail = emailRegex.test(inputText.value);
    if(isValidEmail == true) {
        console.log("valid email")
    } else {
        console.log("invalid email");
    }
    
    
});

dismiss.addEventListener("click", function() {
    location.reload();
})

