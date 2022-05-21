function background() {
    if (window.screen.availWidth > 500) {
        var totalCount = 39;

        var num = Math.ceil(Math.random() * totalCount);
        document.body.background = 'img/cover/' + num + '.jpg';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    else{
        var totalCount = 15;

        var num = Math.ceil(Math.random() * totalCount);
        document.body.background = 'img/mobilecover/' + num + '.jpg';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
}

document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');