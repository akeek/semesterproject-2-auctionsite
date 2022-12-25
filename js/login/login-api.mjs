localStorage.clear();
import { methodsOfFetch } from "../api-stuff/fetch-method.mjs";
const { loginUser } = methodsOfFetch;


export async function loginAuthUser(url, userCredentials) {
    try {
        loginUser.body = JSON.stringify(userCredentials);
        const response = await fetch(url, loginUser);
        const json = await response.json();

        if (response.status !== 200) {
            const errorMessage = document.querySelector("#error-message");
            errorMessage.style.display = "block";
            errorMessage.innerHTML = `${response.statusText}. Only users with a "@stud.noroff.no" account can login. Make sure that your password is between 8 and 20 characters long.`;
        } else {
            const errorMessage = document.querySelector("#error-message");
            errorMessage.style.display = "none";

            localStorage.setItem("name", json.name);
            localStorage.setItem("email", json.email);
            localStorage.setItem("credits", json.credits);
            localStorage.setItem("avatar", json.avatar);
            localStorage.setItem("token", json.accessToken);

            location.href = "/profile.html";
        }
    } catch (error) {
        console.log(error);
    }
}
