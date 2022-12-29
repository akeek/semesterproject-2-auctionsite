var bidButton = document.getElementById("bid-button");
var bidModal = document.getElementById("bidModal");

export async function sendBidToAPI(url, method) {
    try {
        const response = await fetch(url, method);
        const json = await response.json();
        if (response.status === 200) {
            bidButton.onclick = bidModal.style.display = "block";
            const bidForm = document.querySelector("#bid-form");
            const bidAmount = document.querySelector("#bid-amount");
            bidForm.innerHTML = `
        <h2><strong>${bidAmount.value}</strong> credits</h2>
        <button type="button" class="btn bg-primary mt-2 px-3 py-2 text-white" id="bid-higher-button" onclick="window.location.reload()"><strong>Bid even higher</strong></button>
    `;
        } else {
            const errorMessage = document.querySelector("#error-message");
            errorMessage.style.display = "block";
            errorMessage.innerText = `${json.errors[0].message}`;
        }
    } catch (error) {
        console.log(error);
    }
}