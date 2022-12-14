import { submitUserValues } from "./api/registerUser.mjs";
import { submitLoginUser } from "./api/login.mjs";
import { findProfile } from "./api/findProfile.mjs";
// import { showListings } from "./api/posts/showListings.mjs";
import { user } from "./api/findProfile.mjs";
import { sendPost } from "./api/posts/newPost.mjs";

export const path = location.pathname;
export const BASE_API_URL = "https://api.noroff.dev";

if (path === "/register.html") {
    submitUserValues();
} else if (path === "/login.html") {
    submitLoginUser();
} else if (path === "/profile.html") {
    findProfile(`${BASE_API_URL}/api/v1/auction/profiles/${user}?_posts=true`);
    //showListings(`${BASE_API_URL}/api/v1/auction/profiles/${user}/listings`)
    sendPost();
    //   submitUpdatedPost();
} 