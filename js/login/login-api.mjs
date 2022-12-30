localStorage.clear();
import { methodsOfFetch } from "../api-stuff/fetch-method.mjs";
const { loginUser } = methodsOfFetch;

const loginBtn = document.querySelector("#loginBtn");
const loginModal = document.querySelector("#loginModal");

export async function loginAuthUser(url, userCredentials) {
    try {
        loginUser.body = JSON.stringify(userCredentials);
        const response = await fetch(url, loginUser);
        const json = await response.json();

        if (response.status !== 200) {
            const errorMessage = document.querySelector("#error-message");
            errorMessage.style.display = "block";
            errorMessage.innerHTML = `${response.statusText} Only users with a "@stud.noroff.no" account can login. Make sure that your password is between 8 and 20 characters long.`;
        } else {
            const errorMessage = document.querySelector("#error-message");
            errorMessage.style.display = "none";

            loginBtn.onclick = loginModal.style.display = "block";

            localStorage.setItem("name", json.name);
            localStorage.setItem("email", json.email);
            localStorage.setItem("credits", json.credits);
            localStorage.setItem("avatar", json.avatar);
            localStorage.setItem("token", json.accessToken);

            setTimeout(() => { location.href = "profile.html" }, 2000);
        }
    } catch (error) {
        console.log(error);
    }
}
