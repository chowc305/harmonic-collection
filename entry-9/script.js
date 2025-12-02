window.addEventListener("click", (event) => {
  if (!event.target.closest(".spinner, .spinner-img, #myButton")) {
    alert("Error: Something went wrong.");
  }
});