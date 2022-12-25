const userName = localStorage.getItem("name");
const userAvatar = localStorage.getItem("avatar");
const userEmail = localStorage.getItem("email");
const userCredits = localStorage.getItem("credits");

function showUserAvatar() {
    if (userAvatar === "null") {
        const userAvatarContainer = document.querySelector("#user-avatar");
        userAvatarContainer.innerHTML = `<img src="/assets/j1lost.jpg" class="rounded-circle" style="width: 200px; height: 200px; object-fit: cover; border-width: 4px !important;" id="profile-avatar" alt=""></img>`;
    } else {
        const userAvatarContainer = document.querySelector("#user-avatar");
        userAvatarContainer.innerHTML = `<img src="${userAvatar}" class="rounded-circle" style="width: 150px; height: 150px; object-fit: cover; border-width: 1px !important;" id="profile-avatar" alt=""></img>`;
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

function throwIfLoggedOut() {
    if (!userName) {
        location.href = "/index.html";
    }
}
throwIfLoggedOut();
