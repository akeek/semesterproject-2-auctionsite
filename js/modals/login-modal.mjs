var loginModal = document.getElementById("loginModal");

window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}