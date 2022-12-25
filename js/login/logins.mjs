// import { API_BASE_URL } from "../api-stuff/base-urls";

// const passwordValue = document.getElementById("password");
// const emailValue = document.getElementById("email");
// const loginForm = document.getElementById("login-form");
// const errorMessage = document.getElementById("error-message");

// async function userLogin(url, data) {
//     try {
//         const postInfo = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         };
//         const response = await fetch(url, postInfo);
//         const json = await response.json();
//         const accessToken = json.accessToken;
//         const username = json.name;
//         const credits = json.credits;
//         const avatar = json.avatar;
//         localStorage.setItem("accessToken", accessToken);
//         localStorage.setItem("username", username);
//         localStorage.setItem("credits", credits);
//         localStorage.setItem("avatar", avatar);

//         if (json.statusCode === 400 | json.message === "Invalid email or password") {
//             showError();
//         } else {
//             window.location.href = "profile.html";
//         }
//         return json;
//     } catch (error) {
//         console.log(error);
//         showError();
//     }
// }

// function showError() {
//     errorMessage.innerHTML = `<p>Wrong email or password. Try again.</p>`;
// }

// export function submitLoginUser() {
//     loginForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const loginUser = {
//             email: emailValue.value,
//             password: passwordValue.value,
//         };
//         userLogin(`${API_BASE_URL}/api/v1/auction/auth/login`, loginUser);
//     });
// }