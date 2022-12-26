const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const listingID = urlParams.get("id");

import { bidURL } from "../api-stuff/base-urls.mjs";
const bidItemURL = bidURL(listingID);

import { methodsOfFetch } from "../api-stuff/fetch-method.mjs";
const { sendBidMethod } = methodsOfFetch;

import { sendBidToAPI } from "./add-bid-api.mjs";

const bidButton = document.querySelector("#bid-button");
const bidAmount = document.querySelector("#bid-amount");

bidButton.addEventListener("click", (event) => {
    event.preventDefault();
    sendBidMethod.body = JSON.stringify({
        amount: bidAmount.valueAsNumber,
    });
    sendBidToAPI(bidURL(listingID), sendBidMethod);
});
