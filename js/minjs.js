var info=document.querySelector(".about-us-button"),popup=document.querySelector(".write-us"),close=document.querySelector(".modal-close");info.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")});