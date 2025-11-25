//i want to have ads pop up continuosly, randomly on the screen, and ur able to click them to x them out 

const button = document.getElementById("spawnBtn");
const container = document.getElementById("imageContainer");

button.addEventListener("click", () => {
     const img = document.createElement("img");
const images = ["img/ad-1.png", "img/ad-2.png", "img/ad-3.png"];
img.src = images[Math.floor(Math.random() * images.length)];

  img.classList.add("random-img");

  // random position within the window
  const maxX = window.innerWidth - 120;
  const maxY = (window.innerHeight / 2) - 120;

  img.style.left = Math.random() * maxX + "px";
  img.style.top = Math.random() * maxY + "px";

  // toggle hide when clicked
  img.addEventListener("click", () => {
    img.remove(); // deletes the image
  });

  container.appendChild(img);
});
