const userName = localStorage.getItem("name");
const userAvatar = localStorage.getItem("avatar");
const userEmail = localStorage.getItem("email");
const userCredits = localStorage.getItem("credits");

import { redirectsIfLoggedOut } from "../redirect/redirect.mjs";

function showUserAvatar() {
    if (userAvatar === "") {
        let img = document.createElement("img");
        img.src = "assets/images/cookiemonster.jpeg";
        img.classList.add("rounded-circle")

        let userAvatarContainer = document.getElementById("user-avatar");
        userAvatarContainer.appendChild(img);
    } else {
        const userAvatarContainer = document.querySelector("#user-avatar");
        userAvatarContainer.innerHTML = `<img src="${userAvatar}" class="rounded-circle" id="profile-avatar" alt=""></img>`;
    }
}
showUserAvatar();

function showUserInfo() {
    const userProfileInfo = document.querySelector("#user-profile-info");
    userProfileInfo.innerHTML = `
    <p class="text-center" id="user-name"><b>Name: </b>${userName}</p>
    <p class="text-center" id="user-credits"><b>Credits: </b>${userCredits}</p> 
    <p class="text-center" id="user-email"><b>Email: </b>${userEmail}</p>  
`;
}
showUserInfo();

redirectsIfLoggedOut();
