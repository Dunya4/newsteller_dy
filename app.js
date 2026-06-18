const button =document.querySelector(".card_btn");
const confirm = document.querySelector(".confirm_active");
const cardMain =document.querySelector(".card")

button.addEventListener("click", function(){
    confirm.classList.add("show")
    cardMain.classList.remove("hidden")
})