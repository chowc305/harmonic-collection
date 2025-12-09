window.addEventListener("click", (event) => {
  if (!event.target.closest(".spinner, .spinner-img, #myButton")) {
    alert("I tried HeyTea's new drink...tea was good but I got tired of it very soon. This is my lazy post for Thanksgiving break");
  }
});