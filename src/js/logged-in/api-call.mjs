import { allListingsDesc } from "../api-stuff/base-urls.mjs";
import { methodsOfFetch } from "../api-stuff/fetch-method.mjs";
const { getListing } = methodsOfFetch;
import { showListingsLoggedIn } from "./showListings.mjs";
import { searchListingsLoggedIn } from "./search-bar.mjs";
import { clearSearchLoggedIn } from "./search-bar.mjs";

export async function fetchListings(url, method) {
    try {
        const response = await fetch(url, getListing);
        const allListings = await response.json();
        showListingsLoggedIn(allListings);
        searchListingsLoggedIn(allListings);
        clearSearchLoggedIn(allListings);
    } catch (error) {
        console.log(error);
    }
}
fetchListings(allListingsDesc);
