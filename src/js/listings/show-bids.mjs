export function showBids(itemInfo) {
    for (let i = 0; i < itemInfo.length; i++) {
        const formattedDate = new Date(itemInfo[i].created).toLocaleDateString("en-us", { month: "short", day: "numeric" });
        const formattedTime = new Date(itemInfo[i].created).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

        const bidsContainer = document.querySelector("#bids-container");

        bidsContainer.innerHTML += `
          <div class="row mb-3 border border-secondary border-1 rounded-3">
              <div class="col">
                  <p class="my-1 bg-secondary rounded p-3"><strong>${itemInfo[i].amount}</strong></p>
              </div>
              <div class="col text-start">
                  <p class="mb-0"><strong>${itemInfo[i].bidderName}</strong></p>
                  <p class="mb-0 small"><strong>Date: </strong>${formattedDate}</p>  
                  <p class="mb-0 small"><strong>Time: </strong>${formattedTime}</p>  
              </div>
          </div>
      `;
    }

    if (itemInfo.length === 0) {
        const bidsContainer = document.querySelector("#bids-container");
        bidsContainer.innerHTML = `
          <div class="row mb-3">
              <div class="col text-center">
                <p class="mb-1">No bids yet.</p>  
              </div>
          </div>
      `;
    }
}
