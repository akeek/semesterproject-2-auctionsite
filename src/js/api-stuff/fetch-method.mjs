const token = localStorage.getItem("token");
export const methodsOfFetch = {
    registerUser: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: "",
    },
    loginUser: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: "",
    },
    getProfile: {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    },
    updateAvatar: {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    },
    body: "",
    getListings: {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    },
    createListing: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: "",
    },
    getListing: {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    },
    sendBidMethod: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: "",
    },
};
