var bidModal = document.getElementById("bidModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    bidModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == bidModal) {
        bidModal.style.display = "none";
    }
}