import { submitUserValues } from "./api/registerUser.mjs";


export const path = location.pathname;
export const BASE_API_URL = "https://api.noroff.dev/api/v1";

if (path === "/register.html") {
    submitUserValues();
} else if (path === "/login.html") {
    //submitLoginUser();
} else if (path === "/profile.html") {
    // findProfile(`${BASE_API_URL}/api/v1/social/profiles/${user}?_posts=true`);
    // sendPost();
    // submitUpdatedPost();
} else if (path === "/index.html") {
    //getPosts(`${BASE_API_URL}/api/v1/social/posts?_author=true&_comments=true&_reactions=true`);
} else if (path === "/post-by-id.html") {
    //postById(`${BASE_API_URL}/api/v1/social/posts/${id}?_author=true&_comments=true&_reactions=true`);
}