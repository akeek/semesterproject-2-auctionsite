import { submitUserValues } from "./auth/register.mjs";
import { submitLoginUser } from "./auth/login.mjs";
import { findProfile } from "./profile/findProfile.mjs";
// import { showListings } from "./api/posts/showListings.mjs";
import { getListings } from "./listings/getListings.mjs";
import { user } from "./profile/findProfile.mjs";
import { sendPost } from "./listings/newListing.mjs";
import { createListingForm } from "./variables/variables.mjs";
import { createListing } from "./listings/newListing.mjs"

export const path = location.pathname;
export const BASE_API_URL = "https://api.noroff.dev";

if (path === "/register.html") {
    submitUserValues();
} else if (path === "/login.html") {
    submitLoginUser();
} else if (path === "/profile.html") {
    createListingForm.addEventListener("submit", createListing);
    findProfile(`${BASE_API_URL}/api/v1/auction/profiles/${user}?_posts=true`);
    getListings(`${BASE_API_URL}/api/v1/auction/listings?_tag=aake`);
    //showListings(`${BASE_API_URL}/api/v1/auction/profiles/${user}/listings`)
    sendPost();
} else if (path === "/index.html") {
    getListings(`${BASE_API_URL}/api/v1/auction/listings?_tag=aake`);
} 