const cartTable = document.getElementById("cartTable");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cartTable.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        const row = document.createElement("tr");
        const subtotal = product.price * product.qty;
        total += subtotal;

        row.innerHTML = `
            <td>${product.title}</td>
            <td>$${product.price}</td>
            <td>
                <input type="number" value="${product.qty}" 
                       data-index="${index}" min="1" class="qty-input">
            </td>
            <td>$${subtotal.toFixed(2)}</td>
            <td>
                <button class="remove" data-index="${index}">Remove</button>
            </td>
        `;

        cartTable.appendChild(row);
    });

    const totalElement = document.getElementById("total");
    if (totalElement) {
        totalElement.innerText = `Total: $${total.toFixed(2)}`;
    }

    setupEventListeners();
}

function setupEventListeners() {
    document.querySelectorAll("button.remove").forEach(button => {
        button.addEventListener("click", event => {
            const index = event.target.dataset.index;
            cart.splice(index, 1);
            saveCart();
        });
    });

    document.querySelectorAll("input.qty-input").forEach(input => {
        input.addEventListener("change", event => {
            const index = event.target.dataset.index;
            const newQty = Number(event.target.value);

            if (newQty > 0) {
                cart[index].qty = newQty;
                saveCart();
            }
        });
    });
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();