// Get the item ID via the query string from the previous page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const itemID = urlParams.get("id");

// import the URL for the API call
import { getListingURL } from "../api-stuff/base-urls.mjs";
const listingURL = getListingURL(itemID);

import { methodsOfFetch } from "../api-stuff/fetch-method.mjs"
const { getListing } = methodsOfFetch;
import { createCarouselSlider } from "./carousel.mjs";
import { displayListingInfo } from "./listing-information.mjs"
import { showBids } from "./show-bids.mjs";

export async function getListingImages(listingURL) {
    try {
        const response = await fetch(listingURL, getListing);
        const json = await response.json();
        createCarouselSlider(json);
        displayListingInfo(json);
        showBids(json.bids);
    } catch (error) {
        console.log(error);
    }
}
getListingImages(listingURL);
