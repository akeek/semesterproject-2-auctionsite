localStorage.clear();

import { registerNewUser } from "./register-api.mjs";
import { registerUserURL } from "../api-stuff/base-urls.mjs"

const registrationForm = document.querySelector("#registration-form");
const errorMessage = document.querySelector("#error-message");
const errorEmail = document.querySelector("#error-message-email");
errorMessage.style.display = "none";
errorEmail.style.display = "none";

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const myFormData = new FormData(event.target);
    const newUserObject = Object.fromEntries(myFormData.entries());

    registerNewUser(registerUserURL, newUserObject);
});
