function loadUserAvatar() {
    const avatarNavURLContainer = document.querySelector("#avatar-nav");
    const avatarNavURL = localStorage.getItem("avatar");
    avatarNavURLContainer.src = avatarNavURL;

    if (avatarNavURL === "null") {
        avatarNavURLContainer.src = "/assets/images/unknown.png";
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
        // send credits to localStorage
        localStorage.setItem("credits", json.credits);
    } catch (error) {
        console.log(error);
    }
}
loadUserCredits();