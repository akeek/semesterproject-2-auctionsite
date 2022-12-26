import { createListingURL } from "../api-stuff/base-urls.mjs";
import { methodsOfFetch } from "../api-stuff/fetch-method.mjs";
const { createListing } = methodsOfFetch;

const addNewItemForm = document.querySelector("#add-new-item-form");
const errorMessage = document.querySelector("#error-message");
errorMessage.style.display = "none";

const title = document.querySelector("#title");
const description = document.querySelector("#description");
const date = document.querySelector("#date");
date.min = new Date().toISOString().slice(0, -14);
const time = document.querySelector("#time");
const media1 = document.querySelector("#media1");
const media2 = document.querySelector("#media2");
const media3 = document.querySelector("#media3");
const media4 = document.querySelector("#media4");

addNewItemForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const endsAt = new Date(`${date.value}T${time.value}`);

    const itemObject = {
        title: `${title.value}`,
        description: `${description.value}`,
        tags: [],
        media: [`${media1.value}`, `${media2.value}`, `${media3.value}` `${media4.value}`],
        endsAt: endsAt,
    };

    createListing.body = JSON.stringify(itemObject);

    async function createNewIteminAPI() {
        try {
            const response = await fetch(createListingURL, createListing);
            const json = await response.json();
            if (response.status === 201) {
                location.href = "/profile.html";
            } else {
                errorMessage.style.display = "block";
                errorMessage.innerHTML = ``;

                for (let i = 0; i < json.errors.length; i++) {
                    errorMessage.style.display = "block";
                    errorMessage.innerHTML += `${json.errors[i].message}<br>`;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    createNewIteminAPI();
});
