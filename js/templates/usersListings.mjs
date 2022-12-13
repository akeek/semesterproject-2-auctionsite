// Template for the users listings on the profilepage

export function usersListings(data) {
    const { title, description, media, endsAt, id } = data;

    // Description
    // Create description
    const contentContainer = document.createElement("div");
    const titleContainer = document.createElement("a");
    const descriptioncontainer = document.createElement("a");
    const mediaContainer = document.createElement("img");
    const timeContainer = document.createElement("p");

    // Style description
    descriptioncontainer.classList.add("pb-2", "text-decoration-none", "fw-light")
    titleContainer.classList.add("mt-2", "fs-2", "fw-bolder")
    contentContainer.classList.add("row");
    mediaContainer.classList.add("mb-2")

    titleContainer.href = `post-by-id.html?id=${id}`;
    titleContainer.textContent = title;
    descriptioncontainer.href = `post-by-id.html?id=${id}`;
    descriptioncontainer.textContent = description;
    mediaContainer.src = media;
    timeContainer.textContent = endsAt;

    contentContainer.append(titleContainer, descriptioncontainer, mediaContainer, timeContainer);

    // Full post
    // Create full post
    const fullPost = document.createElement("div");
    const postContent = document.createElement("div");

    // Style full post
    fullPost.classList.add("card", "border-0", "mb-4");
    fullPost.id = id;
    postContent.classList.add("card-body");

    postContent.append(contentContainer);
    fullPost.append(postContent);

    // Display full post
    return fullPost;
}
