// draw page
const body = document.querySelector('body');
const header = document.createElement('div');
header.classList.add('header');

const top_box = document.createElement('div');
top_box.classList.add('top');
header.appendChild(top_box);

const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'Интернет магазин'
top_box.appendChild(logo);

// create basket (empty)
const basket = document.createElement('div');
basket.classList.add('basket');
basket.textContent = 'Корзина пуста';
top_box.appendChild(basket);

body.appendChild(header);

// purchase array
const order = []; // for constructor Product
const order1 = []; // empty
const order2 = [{ title: 'Товар 3', cost: 14, quantity: 2 }, // а в этом товары уже добавлены
{ title: 'Товар 4', cost: 20, quantity: 6 }
];

function Product(title, cost, quantity = 1) {
    this.title = title;
    this.cost = cost;
    this.quantity = quantity;
}

order.push(new Product('Товар 1', 20, 5));
order.push(new Product('Товар 2', 30));

//calc order cost
function orderAmount(order) {
    return order.reduce(function (total, product) {
        return total + product.cost * product.quantity;
    }, 0)
}

//calc numbers of items in purchase
function quantityAmount(order) {
    return order.reduce(function (total, product) {
        return total + product.quantity;
    }, 0)
}

// draw basket with purchase
function drawBasket(order) {
    if (!quantityAmount(order)) {
        basket.textContent = 'Корзина пуста';
    } else {
        basket.textContent = 'В корзине ' + quantityAmount(order) + ' товаров. На сумму ' + orderAmount(order) + ' руб.';
    }
    top_box.appendChild(basket);
}

// draw basket with generates purchases
setTimeout(drawBasket, 2000, order);
setTimeout(drawBasket, 5000, order1);
setTimeout(drawBasket, 7000, order2);
