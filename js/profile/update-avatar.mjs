const userName = localStorage.getItem("name");
import { newAvatar } from "./avatar-api.mjs";
import { avatarURL } from "../api-stuff/base-urls.mjs";
avatarURL(userName);

const changeAvatarForm = document.querySelector("#form-change-avatar");
const avatarUrlInput = document.querySelector("#avatar-media");

changeAvatarForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const avatarObject = { avatar: avatarUrlInput.value };
    newAvatar(avatarURL(userName), avatarObject);
});
