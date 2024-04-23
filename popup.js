document.getElementById("search").addEventListener("click", function() {
  let appendDiv = document.querySelector('.append');

  let calculatingText = document.createElement("p");
  calculatingText.textContent = "Calculating...";
  calculatingText.classList.add("appended-element");
  appendDiv.appendChild(calculatingText);

  setTimeout(function() {
    calculatingText.remove();

    let popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    let recommendationText = document.createElement("p");
    recommendationText.textContent = "We recommend the following:";
    recommendationText.classList.add("popup-text");
    popupContainer.appendChild(recommendationText);

    let image = document.createElement("img");
    image.src = "images/jeans.jpeg";
    image.alt = "Recommendation";
    image.classList.add("popup-image");
    popupContainer.appendChild(image);

    document.body.appendChild(popupContainer);

    popupContainer.addEventListener("click", function(event) {
      if (event.target === popupContainer) {
        popupContainer.remove();
      }
    });
    // Add sleep-time
  }, 2000);
});
