const button =document.querySelector(".card_btn");
const confirm = document.querySelector(".confirm_active");
const cardMain =document.querySelector(".card");
const mail = document.querySelector(".card_mail");
const error = document.querySelector("#error");

button.addEventListener("click", function(e){
    const emailValue = mail.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    confirm.classList.add("show")
    cardMain.classList.remove("hidden")

    
    if(!emailPattern.test(emailValue)){
        error.textContent = "Düzgün email daxil edin";
    } else{
    error.textContent = "";
    cardMain.classList.add("hidden")
    confirm.classList.remove("show")
    }
    

})
