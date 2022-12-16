import { submitUserValues } from "./api/registerUser.mjs";
import { submitLoginUser } from "./api/login.mjs";
import { findProfile } from "./api/findProfile.mjs";
// import { showListings } from "./api/posts/showListings.mjs";
import { getPosts } from "./api/posts/getListings.mjs";
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
    getPosts(`${BASE_API_URL}/api/v1/auction/listings?_tag=aake`);
    //showListings(`${BASE_API_URL}/api/v1/auction/profiles/${user}/listings`)
    sendPost();
} else if (path === "/index.html") {
    getPosts(`${BASE_API_URL}/api/v1/auction/listings?_tag=aake`);
} 