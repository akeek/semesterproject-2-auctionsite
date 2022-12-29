var loginModal = document.getElementById("loginModal");

var span = document.getElementsByClassName("close")[0];

// span.onclick = function () {
//     loginModal.style.display = "none";
// }

window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}