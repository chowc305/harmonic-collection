function bounceCart() {
    const cart = document.getElementById("cart");

    // move up
    cart.style.transform = "translateY(-20px)";

    // return after 300ms
    setTimeout(() => {
        cart.style.transform = "translateY(0)";
    }, 300);
}