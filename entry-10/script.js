const container = document.getElementById("container");
let stamps = [
 document.getElementById("stamp"),
    document.getElementById("stamp2"),
    document.getElementById("stamp3"),
    document.getElementById("stamp4"),
    document.getElementById("stamp5"),
    document.getElementById("stamp6"),
    document.getElementById("stamp7"),
    document.getElementById("stamp8"),
    document.getElementById("stamp9"),
    document.getElementById("stamp10")
]

let clickCount = 0;

container.addEventListener("click", function(e) {

    if (clickCount >= stamps.length) return; // no more stamps left

    const stamp = stamps[clickCount];

    // // position stamp at click location
    // stamp.style.left = e.offsetX + "px";
    // stamp.style.top = e.offsetY + "px";

    // show the stamp
    stamp.classList.remove("hidden");

    clickCount++;
});