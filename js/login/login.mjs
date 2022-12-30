localStorage.clear();

import { loginAuthUser } from "./login-api.mjs";
import { loginUserURL } from "../api-stuff/base-urls.mjs";

const loginForm = document.querySelector("#login-form");
const errorMessage = document.querySelector("#error-message");
errorMessage.style.display = "none";

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const myFormData = new FormData(event.target);
    const userToLoginObject = Object.fromEntries(myFormData.entries());

    loginAuthUser(loginUserURL, userToLoginObject);
});
