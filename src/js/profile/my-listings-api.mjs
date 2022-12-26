import { showMyListings } from "./my-listings.mjs";

import { listingsByProfileURL } from "../api-stuff/base-urls.mjs";
const userName = localStorage.getItem("name");
const myListingsURL = listingsByProfileURL(userName);

import { methodsOfFetch } from "../api-stuff/fetch-method.mjs";
const { getListings } = methodsOfFetch;

async function getMyListings() {
    try {
        const response = await fetch(myListingsURL, getListings);
        const json = await response.json();
        showMyListings(json);
    } catch (error) {
        console.log(error);
    }
}
getMyListings();
