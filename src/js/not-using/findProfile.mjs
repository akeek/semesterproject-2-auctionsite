import { profileTemp } from "../templates/profile.mjs";

export const user = localStorage.getItem("username");

export async function findProfile(url) {
    try {
        const token = localStorage.getItem("accessToken");
        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, options);
        const json = await response.json();
        showProfile(json);
        return json;
    } catch (error) {
        console.log(error);
    }
}

function showProfile(profile) {
    const profileContainer = document.getElementById("profile-container");
    profileContainer.append(profileTemp(profile));
}
