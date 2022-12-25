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
    getListings: {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    },
};
