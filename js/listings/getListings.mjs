import { usersListings } from "../../templates/usersListings.mjs";

export async function getPosts(url) {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
        showListings(results);
        return results;
    } catch (error) {
        console.log(error);
    }
}

function showListings(listings) {
    const listingsContainer = document.getElementById("listings-container");
    listings.forEach((listing) => {
        listingsContainer.append(usersListings(listing))
    });
}