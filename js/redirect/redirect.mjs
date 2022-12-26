const userName = localStorage.getItem("name");

export function redirectsIfLoggedOut() {
    if (!userName) {
        location.href = "/index.html";
    }
}
redirectsIfLoggedOut();