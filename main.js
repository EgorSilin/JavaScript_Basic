// hw_03:

// task_01:

let numbers = 0;

while (numbers <= 100) {
    let flag = true;
    for (i = 2; i < numbers; i++) {
        if (numbers % i == 0) {
            flag = false;
            break;
        }
    }
    if (numbers >= 2 && flag) console.log(numbers);
    numbers++
}


// task_02-03:

// a:
the_basket = [12, 44, 87, 23, 9, 38]

// b_01 (reduce):
function countBasketPrice_1(array) {
    return array.reduce(function (total, amount) {
        return total + amount;
    }, 0);
}

console.log('Total price of all goods in the backet is ' + countBasketPrice_1(the_basket))

// b_02 (loop):
function countBasketPrice_2(array) {
    totalSum = 0
    for (item of array) {
        totalSum += item
    }
    return console.log('Total price of all goods in the backet is ' + totalSum)
}

countBasketPrice_2(the_basket)


// task_04:

for (i = 0; i < 10; console.log(i++)) {
    // empty
}


// task_05:

let a = 'x'
for (i = 0; i <= 20; i++) {
    console.log(a)
    a += 'x'
}

