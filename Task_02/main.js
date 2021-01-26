let products = {
    123: {
        name: "Book",
        price: 250
    },
    124: {
        name: "Pen",
        price: 30
    },
    125: {
        name: "Notepad",
        price: 180
    },
    126: {
        name: "Envelope",
        price: 17
    }
};

let cart = {
    hPdt: null,
    hItems: null,
    items: {},


    save: function () {
        localStorage.setItem("cart", JSON.stringify(cart.items));
    },


    load: function () {
        cart.items = localStorage.getItem("cart");
        if (cart.items == null) { cart.items = {}; }
        else { cart.items = JSON.parse(cart.items); }
    },

    nuke: function () {
        if (confirm("Empty cart?")) {
            cart.items = {};
            localStorage.removeItem("cart");
            cart.list();
        }
    },

    init: function () {
        cart.hPdt = document.getElementById("cart-products");
        cart.hItems = document.getElementById("cart-items");

        cart.hPdt.innerHTML = "";
        let p, item, part;
        for (let id in products) {
            p = products[id];
            item = document.createElement("div");
            item.className = "p-item";
            cart.hPdt.appendChild(item);

            part = document.createElement("div");
            part.innerHTML = p.name;
            part.className = "p-name";
            item.appendChild(part);

            part = document.createElement("div");
            part.innerHTML = "₽" + p.price;
            part.className = "p-price";
            item.appendChild(part);

            part = document.createElement("input");
            part.type = "button";
            part.value = "Add to Cart";
            part.className = "cart p-add";
            part.onclick = cart.add;
            part.dataset.id = id;
            item.appendChild(part);
        }

        cart.load();

        cart.list();
    },

    list: function () {

        cart.hItems.innerHTML = "";
        let item, part, pdt;
        let empty = true;
        for (let key in cart.items) {
            if (cart.items.hasOwnProperty(key)) { empty = false; break; }
        }

        if (empty) {
            item = document.createElement("div");
            item.innerHTML = "Cart is empty";
            cart.hItems.appendChild(item);
        }

        else {
            let p, total = 0, subtotal = 0;
            for (let id in cart.items) {
                p = products[id];
                item = document.createElement("div");
                item.className = "c-item";
                cart.hItems.appendChild(item);

                part = document.createElement("div");
                part.innerHTML = p.name;
                part.className = "c-name";
                item.appendChild(part);

                part = document.createElement("input");
                part.type = "button";
                part.value = "X";
                part.dataset.id = id;
                part.className = "c-del cart";
                part.addEventListener("click", cart.remove);
                item.appendChild(part);

                part = document.createElement("input");
                part.type = "number";
                part.value = cart.items[id];
                part.dataset.id = id;
                part.className = "c-qty";
                part.addEventListener("change", cart.change);
                item.appendChild(part);

                subtotal = cart.items[id] * p.price;
                total += subtotal;
            }

            item = document.createElement("input");
            item.type = "button";
            item.value = "Empty";
            item.addEventListener("click", cart.nuke);
            item.className = "c-empty cart";
            cart.hItems.appendChild(item);

            item = document.createElement("input");
            item.type = "button";
            item.value = "Checkout - " + "₽" + total;
            item.addEventListener("click", cart.checkout);
            item.className = "c-checkout cart";
            cart.hItems.appendChild(item);
        }
    },

    add: function () {
        if (cart.items[this.dataset.id] === undefined) {
            cart.items[this.dataset.id] = 1;
        } else {
            cart.items[this.dataset.id]++;
        }
        cart.save();
        cart.list();
    },

    change: function () {
        if (this.value === 0) {
            delete cart.items[this.dataset.id];
        } else {
            cart.items[this.dataset.id] = this.value;
        }
        cart.save();
        cart.list();
    },

    remove: function () {
        delete cart.items[this.dataset.id];
        cart.save();
        cart.list();
    },

    checkout: function () {
        alert("TO DO");
    }
};
window.addEventListener("DOMContentLoaded", cart.init);