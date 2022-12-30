function loadUserAvatar() {
    const avatarNavURLContainer = document.querySelector("#avatar-nav");
    const avatarNavURL = localStorage.getItem("avatar");
    avatarNavURLContainer.src = avatarNavURL;

    if (avatarNavURL === "") {
        // In case one-error fails in HTML
        avatarNavURLContainer.src = "/assets/images/cookiemonster.jpeg";
        avatarNavURLContainer.style.height = "40px";
        avatarNavURLContainer.style.width = "40px";
        avatarNavURLContainer.classList.add("rounded-circle")

    }
}
loadUserAvatar();

import { getProfileURL } from "../api-stuff/base-urls.mjs";
import { methodsOfFetch } from "../api-stuff/fetch-method.mjs";
export async function loadUserCredits() {
    try {
        const userName = localStorage.getItem("name");
        const { getProfile } = methodsOfFetch;
        const response = await fetch(getProfileURL(userName), getProfile);
        const json = await response.json();
        const userCreditsContainer = document.querySelector("#user-credits-container");
        userCreditsContainer.innerHTML = `${json.credits}`;

        localStorage.setItem("credits", json.credits);
    } catch (error) {
        console.log(error);
    }
}
loadUserCredits();