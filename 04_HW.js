// hw_4:

// task_1:

let num = 125;

function numToObj(num) {

    let keys = ['unities', 'tens', 'hundreds'];

    if (num > 999) {
        return ("The number you've entered is higher than 999!\n" + {});
    } else {
        let obj = {};
        let vals = num.toString();
        switch (vals.length) {
            case 3:
                obj[keys[0]] = +(vals[vals.length - 1]);
            case 2:
                obj[keys[1]] = +(vals[vals.length - 2]);
            case 1:
                obj[keys[2]] = +(vals[vals.length - 3]);
                break;
        }
        return obj;
    }
}

console.log(numToObj(num));


// task_2:

let basketOfGoods = [
    {
        good: 'pen',
        price: 50
    },

    {
        good: 'book',
        price: 400,
    },

    {
        good: 'paper',
        price: 250
    },

    {
        good: 'liner',
        price: 120
    }
]


function countBasketPrice(basket) {
    let totalPrice = 0;
    for (goods of basket) {
        totalPrice += goods.price
    }
    return console.log('Total price of all the goods in the backet is ' + totalPrice)
}

countBasketPrice(basketOfGoods)