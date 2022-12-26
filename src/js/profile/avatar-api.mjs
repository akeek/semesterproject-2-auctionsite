import { methodsOfFetch } from "../api-stuff/fetch-method.mjs";
const { updateAvatar } = methodsOfFetch;

export async function newAvatar(url, avatarObject) {
    try {
        updateAvatar.body = JSON.stringify(avatarObject);
        const response = await fetch(url, updateAvatar);
        const json = await response.json();
        localStorage.setItem("avatar", json.avatar);
        location.href = "/profile.html";
    } catch (error) {
        console.log(error);
    }
}
