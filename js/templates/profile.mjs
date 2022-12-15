// Template for profile

export function profileTemp(data) {
    const { name, avatar } = data;

    // Create profile
    const headline = document.getElementById("author-name")
    const fullProfile = document.createElement("div");
    const profilePicture = document.createElement("img");

    // Style profile
    headline.classList.add("h1", "text-center", "mb-3");
    fullProfile.classList.add("card-body", "align-items-center", "d-flex", "flex-column-reverse");
    profilePicture.classList.add("img-fluid", "medium");

    // HTML Profile
    headline.textContent = name

    if (avatar !== "") {
        profilePicture.src = avatar;
    } else {
        profilePicture.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }

    fullProfile.append(profilePicture);

    // Display full profile
    return fullProfile;
}
