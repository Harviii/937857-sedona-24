var search = document.querySelector(".search"),
    popup = document.querySelector(".popup"),
    enter = popup.querySelector(".enter"),
    exist = popup.querySelector(".exist"),
    form = popup.querySelector("form"),
    inputenter = popup.querySelector(".enter"),
    inputexist = popup.querySelector(".exist");
search.addEventListener("click", function(e) {
    e.preventDefault(), popup.classList.toggle("popup-show"), enter.focus(), inputenter.classList.remove("popup-error"), inputexist.classList.remove("popup-error-two")
});
form.addEventListener("submit", function(e) {
    enter.value && exist.value || (e.preventDefault(), inputenter.classList.add("popup-error"), inputexist.classList.add("popup-error-two"))
});
window.addEventListener("keydown", function(e) {
    27 === e.keyCode && (e.preventDefault(), popup.classList.contains("popup-show") && (popup.classList.remove("popup-show"), inputenter.classList.remove("popup-error"), inputexist.classList.remove("popup-error-two")))
});
var mapClick = document.querySelector(".callmap"),
    mapShow = document.querySelector(".map");
mapClick.addEventListener("click", function(e) {
    e.preventDefault(), mapShow.classList.toggle("map-show")
});
window.addEventListener("keydown", function(e) {
    27 === e.keyCode && (e.preventDefault(), mapShow.classList.contains("map-show") && (mapShow.classList.remove("map-show")))
})
  











