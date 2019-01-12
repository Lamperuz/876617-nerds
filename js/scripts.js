var info = document.querySelector(".about-us-button");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".modal-close");
info.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
