
let productForm = document.querySelector("#productForm");
let productList = document.querySelector("#productList");
let cartButton = document.querySelector("#cartButton");
let cartSidebar = document.querySelector("#cartSidebar");
let closeCart = document.querySelector("#closeCart");
let cartItemsContainer = document.querySelector("#cartItems");
let cartCount = document.querySelector("#cartCount");
let addProductButton = document.querySelector("#addProductButton");

function loadProducts() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    productList.innerHTML = ""; 

    products.forEach((product, index) => {
        let productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${index})">Add to Cart</button>
            </div>`;
        productList.innerHTML += productCard;
    });
}

function addToCart(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(products[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.innerText = cart.length;
}

cartButton.addEventListener("click", () => {
    cartSidebar.classList.toggle("open");
    loadCartItems();
});

closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
});

function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsContainer.innerHTML = ""; 

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach((item, index) => {
        let cartItem = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                </div>
                <button class="delete-btn" onclick="removeFromCart(${index})">Delete</button>
            </div>
            <hr>
        `;
        cartItemsContainer.innerHTML += cartItem;
    });
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
}

productForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let productName = document.querySelector("#productName").value;
    let productPrice = document.querySelector("#productPrice").value;
    let productImage = document.querySelector("#productImage").value;

    if (!productName || !productPrice || !productImage) {
        alert("Please fill all fields!");
        return;
    }

    let newProduct = {
        name: productName,
        price: parseFloat(productPrice),
        image: productImage
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    document.querySelector("#productName").value = "";
    document.querySelector("#productPrice").value = "";
    document.querySelector("#productImage").value = "";

    loadProducts();
});

let isFormVisible = false;

addProductButton.addEventListener("click", () => {
    if (!isFormVisible) {
        productForm.style.display = "block";  
        isFormVisible = true;  
    }
});



loadProducts();
updateCartCount();
