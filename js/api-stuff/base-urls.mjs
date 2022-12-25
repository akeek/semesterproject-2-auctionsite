// BASE URL
export const API_BASE_URL = `https://api.noroff.dev/api/v1`;

// Get listings
export const allListingsLoggedOutURL = `${API_BASE_URL}/auction/listings?_seller=true&_bids=true&_active=true`;

// Register user
export const registerUserURL = `${API_BASE_URL}/auction/auth/register`;

// Login user
export const loginUserURL = `${API_BASE_URL}/auction/auth/login`;

// Change avatar
export function updateAvatarURL(name) {
    return `${API_BASE_URL}/auction/profiles/${name}/media`;
}

// Get profile
export function getProfileURL(name) {
    return `${API_BASE_URL}/auction/profiles/${name}?_listings=true`;
}

// Change avatar
export function avatarURL(name) {
    return `${API_BASE_URL}/auction/profiles/${name}/media`;
}

// Get listings by profile
export function listingsByProfileURL(name) {
    return `${API_BASE_URL}/auction/profiles/${name}/listings?_seller=true&_bids=true&sort=created&sortOrder=desc&_active=true`;
}