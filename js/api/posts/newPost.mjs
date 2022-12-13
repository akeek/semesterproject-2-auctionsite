import { BASE_API_URL } from "../../index.mjs";

const postForm = document.getElementById("post-form");
const body = document.getElementById("post-container");
const title = document.getElementById("title");
const description = document.getElementById("description");
const media = document.getElementById("media");
const endTime = document.getElementById("end-time");

async function newListing(url, data) {
    try {
        const token = localStorage.getItem("accessToken");
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, postData);
        const json = await response.json();
        postForm.reset();
        window.location.reload();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export function sendPost() {
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const postValue = {
            title: title.value,
            description: description.value,
            media: media.value,
            endTime: endTime.value
        };
        if (!postValue.media) {
            delete postValue.media;
        }
        newListing(`${BASE_API_URL}/api/v1/auction/posts`, postValue);
    });
}
