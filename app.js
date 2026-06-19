const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-icon");
const backToTopButton = document.querySelector(".foot-panel1");
const cart = document.querySelector(".nav-cart");
const signIn = document.querySelector(".nav-signin");
const address = document.querySelector(".nav-address");
const categoryBoxes = document.querySelectorAll(".box");

let cartCount = 0;

function showMessage(message) {
    alert(message);
}

function searchProducts() {
    const searchText = searchInput.value.trim();

    if (searchText === "") {
        showMessage("Please type something to search.");
        searchInput.focus();
        return;
    }

    showMessage("Searching Amazon for: " + searchText);
}

searchButton.addEventListener("click", searchProducts);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchProducts();
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

cart.addEventListener("click", function () {
    showMessage("Your cart has " + cartCount + " item(s).");
});

signIn.addEventListener("click", function () {
    const userName = prompt("Enter your name:");

    if (userName && userName.trim() !== "") {
        signIn.querySelector("span").textContent = "hello, " + userName.trim();
    }
});

address.addEventListener("click", function () {
    const deliveryPlace = prompt("Enter your delivery location:");

    if (deliveryPlace && deliveryPlace.trim() !== "") {
        address.querySelector(".add-sec").textContent = deliveryPlace.trim();
    }
});

categoryBoxes.forEach(function (box) {
    const title = box.querySelector("h2").textContent;
    const seeMore = box.querySelector("p");

    seeMore.addEventListener("click", function () {
        cartCount++;
        cart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Cart (' + cartCount + ")";
        showMessage(title + " item added to cart.");
    });
});
