import { API_BASE_URL, API_LISTINGS_URL } from "../variables/variables.mjs";


const newItemForm = document.getElementById("add-new-item-form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const media = document.getElementById("media1");
const endsAt = document.getElementById("end-time");

async function createListing(url, data) {
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
        newItemForm.reset();
        window.location.reload();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export function sendPost() {
    newItemForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const postValue = {
            title: `${title.value}`,
            description: `${description.value}`,
            media: `${media.value}`,
            endsAt: `${endsAt.value}`
        };
        if (!postValue.media) {
            delete postValue.media;
        }
        createListing(`${API_BASE_URL}/api/v1/auction/listings`, postValue);
    });
}



// export async function createListing(evt) {
//     evt.preventDefault();

//     const [title, descrip, tags, endsAt, media] = evt.target.elements;

//     const arrayTags = tags.value.replace(/\s+/g, "").split(",");

//     let dataObj = {
//         title: `${title.value}`,
//         description: `${descrip.value}`,
//         tags: arrayTags,
//         media: `${media.value}`,
//         endsAt: `${endsAt.value}`,
//     };

//     if (!media || media === [] || media === "") {
//         delete dataObj.media;
//     }

//     const jwt = storage.load("jwt");

//     try {
//         const response = await fetch(`${API_BASE_URL}${API_LISTINGS_URL}`, {
//             method: "POST",
//             body: JSON.stringify(dataObj),
//             headers: {
//                 Authorization: `Bearer ${jwt}`,
//                 "Content-Type": "application/json; charset=utf-8",
//             },
//         });

//         const json = await response.json();
//         location.href = `./listing.html?id=${json.id}`;
//     } catch (error) {
//         console.log(error)
//     }
// }






