export function showMyListings(myListings) {
    const listingsContainer = document.querySelector("#listings-container");
    listingsContainer.innerHTML = ``;

    for (let i = 0; i < myListings.length; i++) {
        const formattedPostDate = new Date(myListings[i].created).toLocaleDateString("en-us", {
            month: "short",
            day: "numeric",
        });
        const formattedPostTime = new Date(myListings[i].created).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
        const formattedDeadlineDate = new Date(myListings[i].endsAt).toLocaleDateString("en-us", { month: "short", day: "numeric" });
        const formattedDeadlineTime = new Date(myListings[i].endsAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

        listingsContainer.innerHTML += `
          <div class="col p-2">
                  <div class="card h-100 border-1 bg-light">
                      <a href="listing.html?id=${myListings[i].id}"><img src="${myListings[i].media[0]}" class="card-img-top border-bottom border-1" style="height: 19rem; object-fit: cover" alt="Caption: ${myListings[i].title}"></a>
                      <div class="card-body">
                      <a href="listing.html?id=${myListings[i].id}" class="text-decoration-none"><h3 class="card-title pb-0">${myListings[i].title}</h3></a>
                      <p class="card-text">${myListings[i].description}</p>
                      
                      </div>
                      <div class="card-footer bg-light pt-0 mt-0 border-0">
                      <hr>
                      <p class="mb-0"><strong>Bids: </strong>${myListings[i].bids.length}</p>
                      <p class="mb-0"><strong>Created: </strong>${formattedPostDate} <span class="text-muted">| ${formattedPostTime}</span></p>
                      <p class="mb-3"><strong>Ends at: </strong>${formattedDeadlineDate} <span class="text-muted">| ${formattedDeadlineTime}</span></p>
                      <a href="listing.html?id=${myListings[i].id}"><button class="btn btn-secondary px-4 mb-2"><strong>Open</strong></button></a>
                      </div>
                  </div>
                  </div>
          
          `;
    }
}
