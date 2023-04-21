let itemCount = 0;
let totalPrice = 0;

function addToCart(price) {
    itemCount++;
    totalPrice += price;
    updateCart();
}

function removeFromCart(price) {
    itemCount--;
    totalPrice -= price;
    if (totalPrice < 0) {
        totalPrice = 0.00
        itemCount = 0
    }
    updateCart();
}

function updateCart() {
    document.getElementById("itemCount").innerHTML = itemCount;
    document.getElementById("totalPrice").innerHTML = totalPrice.toFixed(2);
}





