window.addEventListener("keydown", checkKeyPressed, false); // Break-Pause tuşuna bastığında müzik çalar (Eğer discord firewall tarafından engelli değilse)

function checkKeyPressed(e) {
    if (e.keyCode == "19") {
        //Play Music
        document.getElementById('audio').play()
    }
}