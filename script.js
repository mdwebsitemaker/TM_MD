/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}


/* ================= CART ================= */

let cart = [];


function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart!");

}


function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    cartCount.innerText = cart.length;


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;


        const div =
            document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

            <span>
                ${item.name}
            </span>

            <strong>
                ₹${item.price}
            </strong>

            <button
                onclick="removeFromCart(${index})"
                style="
                    border:none;
                    background:none;
                    color:#b33;
                    cursor:pointer;
                "
            >
                ×
            </button>

        `;


        cartItems.appendChild(div);

    });


    cartTotal.innerText =
        "₹" + total;

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


function openCart() {

    document
        .getElementById("cartOverlay")
        .classList.add("active");

    updateCart();

}


function closeCart() {

    document
        .getElementById("cartOverlay")
        .classList.remove("active");

}


/* ================= WHATSAPP CHECKOUT ================= */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    let message =
        "Hello Zayron Herbal!%0A%0A";

    message +=
        "I want to order:%0A";


    let total = 0;


    cart.forEach((item, index) => {

        message +=
            `${index + 1}. ${item.name} - ₹${item.price}%0A`;

        total += item.price;

    });


    message +=
        `%0ATotal: ₹${total}`;


    /*
       IMPORTANT:
       Replace 91XXXXXXXXXX with
       your real WhatsApp number.
    */

    const phone =
        "91XXXXXXXXXX";


    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        message,
        "_blank"
    );

}


/* ================= PRODUCT FILTER ================= */

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* ================= CONTACT FORM ================= */

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;


        /*
           Replace this number
           with your WhatsApp number.
        */

        const whatsappNumber =
            "91XXXXXXXXXX";


        const text =
            `Hello Zayron Herbal!

Name: ${name}

Phone: ${phone}

Email: ${email}

Message:
${message}`;


        const url =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(text);


        window.open(url, "_blank");


        this.reset();

    });
