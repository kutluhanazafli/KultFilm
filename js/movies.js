window.addEventListener("load", function() {  //Sadece ilk satıra konulmuştur performans sebeplerinden dolayı
    var selectors = document.querySelectorAll(".reveal");
    for (var el of selectors) {
        el.classList.add('loaded');
        el.style.height = el.querySelector(".reveal__content > *").scrollHeight + "px";
    }
}, false);
