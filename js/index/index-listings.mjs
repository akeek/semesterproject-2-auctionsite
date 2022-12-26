localStorage.clear();

import { allListingsDesc } from "../api-stuff/base-urls.mjs";
import { showListingsLoggedOut } from "./loggedout-listings.mjs";
import { searchListings } from "../searchbar/searchbar.mjs";
import { clearSearchField } from "../searchbar/searchbar.mjs";

export async function fetchListingsLoggedOut(url) {
    try {
        const response = await fetch(url);
        const allListings = await response.json();

        showListingsLoggedOut(allListings);
        searchListings(allListings);
        clearSearchField(allListings);
    } catch (error) {
        console.log(error);
    }
}
fetchListingsLoggedOut(allListingsDesc);