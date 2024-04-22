function clearAppendedElements() {
  let elementsToRemove = document.querySelectorAll(".appended-element");
  elementsToRemove.forEach(function(element) {
    element.remove();
  });
}

document.getElementById("search").addEventListener("click", function() {
  let calculatingText = document.createElement("p");
  calculatingText.textContent = "Calculating...";
  calculatingText.classList.add("appended-element"); // Add the "appended-element" class
  document.body.appendChild(calculatingText);

  setTimeout(function() {
    calculatingText.remove();

    let recommendText = document.createElement("p");
    recommendText.textContent = "We recommend the following:";
    recommendText.classList.add("appended-element"); // Add the "appended-element" class
    document.body.appendChild(recommendText);

    let image = document.createElement("img");
    image.src = "images/jeans.jpeg";
    image.alt = "Logo";
    image.classList.add("appended-element"); // Add the "appended-element" class
    document.body.appendChild(image);

  }, 2000);
});

document.getElementById("clear").addEventListener("click", function() {
  clearAppendedElements();
});
