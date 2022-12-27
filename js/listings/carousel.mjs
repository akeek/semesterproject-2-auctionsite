export function createCarouselSlider(data) {
  for (let i = 0; i < data.media.length; i++) {
    const buttonContainer = document.querySelector("#slider-buttons-container");
    const imageContainer = document.querySelector("#image-container");
    buttonContainer.innerHTML += `
          <button type="button" data-bs-target="#gallery-container" data-bs-slide-to="${i}" class="active"></button>
      `;
    imageContainer.innerHTML += `
          <div class="carousel-item active">
              <img src="${data.media[i]}" alt="Image of ${data.title}" class="d-block" style="width: 100%; height: 60vh; object-fit: cover;"/>
          </div>
      `;
  }

  if (data.media.length === 0) {
    let img = document.createElement("img");
    img.src = "assets/images/cookiebro.jpeg";
    img.classList.add("d-block", "m-auto", "rounded");
    img.style.height = `250px`;
    img.style.width = `250px`;

    let errorText = document.createElement("p");
    errorText.innerHTML = "There are no salespictures, only this funny Cookiemonster";
    errorText.classList.add("text-center", "my-4", "text-primary");
    errorText.style.fontSize = `1.5rem`

    let userAvatarContainer = document.getElementById("image-container");

    userAvatarContainer.appendChild(errorText);
    userAvatarContainer.appendChild(img);

  }

  if (data.media.length === 1 || data.media.length === 0) {
    const sliderButtons = document.querySelector("#slider-buttons-container");
    sliderButtons.style.display = "none";

    const sliderArrows = document.querySelector("#slider-arrows");
    sliderArrows.style.display = "none";
  }
}