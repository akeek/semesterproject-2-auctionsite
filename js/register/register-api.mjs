import { registerUserURL } from "../api-stuff/base-urls.mjs";
import { methodsOfFetch } from "../api-stuff/fetch-method.mjs";
const { registerUser } = methodsOfFetch;

export async function registerNewUser(registerURL, newUserObject) {
    try {
        registerUser.body = JSON.stringify(newUserObject);
        const response = await fetch(registerUserURL, registerUser);
        const json = await response.json();

        if (response.status !== 201) {
            const errorMessage = document.querySelector("#error-message");
            errorMessage.style.display = "block";
            errorMessage.innerHTML = `${json.errors[0].message}`;
        } else {
            location.href = "/login.html";
        }
    } catch (error) {
        console.log(error);
    }
}
