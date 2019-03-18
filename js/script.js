var 
 search = document.querySelector(".search"),
 popup = document.querySelector(".popup"),
 enter = popup.querySelector(".enter"), 
 exist = popup.querySelector(".exist"),   
 form = popup.querySelector("form"),   
 inputenter = popup.querySelector(".enter"),
 inputexist = popup.querySelector(".exist");    
search.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("popup-show");
    enter.focus();
    inputenter.classList.remove("popup-error");
    inputexist.classList.remove("popup-error-two");
} ); 
form.addEventListener("submit", function (evt) {
    if (!enter.value || !exist.value) {
        evt.preventDefault();
        inputenter.classList.add("popup-error");
        inputexist.classList.add("popup-error-two");
    }
} );
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
            inputenter.classList.remove("popup-error");  
            inputexist.classList.remove("popup-error-two");  
        }
    }
} );