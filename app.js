const button = document.querySelector(".card_btn")
const sendMail = document.querySelector(".send_mail");
const error = document.querySelector("#error");
const cardMain = document.querySelector(".card");
const active = document.querySelector(".confirm_active");
const activeBtn = document.querySelector(".active_btn")
const mail =document.querySelector(".card_mail")

button.addEventListener("click" , function(e){
    const emailValue = mail.value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();

    if(!emailPattern.test(emailValue)){
      error.textContent = "Valid email required";
      mail.classList.add("error_mode");     
    } else{
        sendMail.textContent = mail.value;
        mail.value = "";
        error.textContent = "";
        mail.classList.remove("error_mode");
        cardMain.classList.add("hidden")
        active.classList.add ("show");
    }
})
activeBtn.addEventListener("click", function(e){
     active.classList.remove("show");
     cardMain.classList.remove("hidden");
})
