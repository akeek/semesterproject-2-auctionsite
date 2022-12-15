// Template for the users listings on the profilepage

export function usersListings(data) {
    const { title, description, media, endsAt } = data;

    // Description
    // Create description
    const contentContainer = document.createElement("div");
    const titleContainer = document.createElement("h4");
    const descriptioncontainer = document.createElement("p");
    const mediaContainer = document.createElement("img");
    const timeContainer = document.createElement("p");

    // Style description
    descriptioncontainer.classList.add("pb-2", "text-decoration-none", "fw-light")
    titleContainer.classList.add("mt-2", "fs-2", "fw-bolder")
    contentContainer.classList.add("row");
    mediaContainer.classList.add("border-1", "listing-media")

    titleContainer.textContent = title;
    descriptioncontainer.textContent = description;
    mediaContainer.src = media;

    const endTime = new Date(endsAt).toLocaleString("en-GB", { timeStyle: "short", dateStyle: "short" });
    timeContainer.textContent = `Ends at: ${endTime}`;


    contentContainer.append(titleContainer, timeContainer, descriptioncontainer, mediaContainer);

    // Full post
    // Create full post
    const fullPost = document.createElement("div");
    const postContent = document.createElement("div");

    // Style full post
    fullPost.classList.add("card", "border-1", "mb-4");
    postContent.classList.add("card-body");

    postContent.append(contentContainer);
    fullPost.append(postContent);

    // Display full post
    return fullPost;
}
