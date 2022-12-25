// import { submitUserValues } from "./auth/register.mjs";
// import { submitLoginUser } from "./auth/login.mjs";
// import { findProfile } from "./profile/findProfile.mjs";
// import { showListings } from "./listings/showListings.mjs";
// import { getListings } from "./listings/getListings.mjs";
// import { user } from "./profile/findProfile.mjs";
// import { sendPost } from "./listings/newListing.mjs";
// // import { createListingForm } from "./variables/variables.mjs";
// // import { createListing } from "./listings/newListing.mjs"

// export const path = location.pathname;

// if (path === "/register.html") {
//     submitUserValues();
// } else if (path === "/profile.html") {
//     findProfile(`${BASE_API_URL}/api/v1/auction/profiles/${user}?_posts=true`);
//     getListings(`${BASE_API_URL}/api/v1/auction/listings?_tag=aake`);
//     showListings(`${BASE_API_URL}/api/v1/auction/profiles/${user}/listings`)
// } else if (path === "/new-listing.html") {
//     sendPost();
// } else if (path === "/index.html") {
//     getListings(`${BASE_API_URL}/api/v1/auction/listings?_tag=aake`);
// } 