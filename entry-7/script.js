const words = {
  adjective: ["sunny", "mysterious", "chaotic", "sparkly", "foggy"],
  object: ["backpack", "cup", "keychain", "umbrella", "camera"],
  emotion: ["excited", "overwhelmed", "sleepy", "chaotic", "peaceful"],
  place: ["alleyway", "park", "bus stop", "crosswalk", "tiny bookstore"],
  verb: ["dancing", "laughing", "yelling", "jumping", "spinning"],
  drink: ["matcha latte", "milk tea", "oolong tea", "yakult boba", "peach slush"],
  topic: ["school", "boba toppings", "relationships", "weird dreams", "fashion"],
  debate: ["cats vs dogs", "milk tea vs fruit tea", "hot vs iced", "straws vs no straws"],
  action: ["run away", "join a dance circle", "buy another drink", "take a nap"]
};

function randomWord(type) {
  const arr = words[type];
  return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("fillButton").addEventListener("click", () => {
  document.querySelectorAll(".blank").forEach(span => {
    span.textContent = randomWord(span.dataset.type);
  });
  
});