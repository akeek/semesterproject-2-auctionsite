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
  if (data.media.length === 1) {
    const sliderButtons = document.querySelector("#slider-buttons-container");
    sliderButtons.style.display = "none";

    const sliderArrows = document.querySelector("#slider-arrows");
    sliderArrows.style.display = "none";
  }
}