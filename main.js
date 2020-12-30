// hw_2:

// task_1:

let a = 1, b = 1, c, d;

c = ++a; alert(c)           // 2, т.к. префиксная запись инкремента вовратит значение a, сразу же увеличив его на 1
d = b++; alert(d)           // 1, т.к. постфиксная запись инкремента сперва возвратит исходное значение
c = (2 + ++a); alert(c);    // 5, т.к. c будет равен сумме 2 и ++a из первой строки, увеличенной еще на 1 - т.е. 2 + 2 + 1
d = (2 + b++); alert(d);    // 4 - по аналогии с предыдущей строкой, но с учетом постфиксной b: 2 + 1 + 1
alert(a)                    // 3 - накопленное значение за все вышеописанные операции
alert(b)                    // 3 - накопленное значение за все вышеописанные операции


// task_2:

let a = 2;
let x = 1 + (a *= 2);
alert(x) // 5, i.e. x = 1 + (a = a * 2)


// task_3:

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

a = getRndInt(-100, 100)
b = getRndInt(-100, 100)

if (a > 0 && b > 0)
    alert(a - b);
else if (a < 0 && b < 0)
    alert(a * b);
else
    alert(a + b)


// task_4:

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

a = getRndInt(0, 15)

switch (a) {
    case a = 0:
        alert('0');
    case a = 1:
        alert('1');
    case a = 2:
        alert('2');
    case a = 3:
        alert('3');
    case a = 4:
        alert('4');
    case a = 5:
        alert('5');
    case a = 6:
        alert('6');
    case a = 7:
        alert('7');
    case a = 8:
        alert('8');
    case a = 9:
        alert('9');
    case a = 10:
        alert('10');
    case a = 11:
        alert('11');
    case a = 12:
        alert('12');
    case a = 13:
        alert('13');
    case a = 14:
        alert('14');
    case a = 15:
        alert('15');
        break
}


// task_5:

//add:
function add(a, b) {
    return a + b;
}

//sub:
function sub(a, b) {
    return a - b;
}

// mult:
function mult(a, b) {
    return a * b;
}

// div:
function div(a, b) {
    return a / b;
}


// task_6:

let c = +prompt('Enter your first number: ')
let d = +prompt('Enter your second number: ')
let operation = prompt('Enter a math operation: ');

function mathOperation(c, d, operation) {

    switch (operation) {
        case 'addition':
            alert(add(c, d));
            break;
        case 'subtraction':
            alert(sub(c, d));
            break;
        case 'multiplication':
            alert(mult(c, d));
            break;
        case 'division':
            alert(div(c, d));
            break;
    }
}

mathOperation(c, d, operation);


// task_7:

/*
0 - это число, входящее в тип значение Number, в то время как null - это отдельный тип значения, представляющий собой ничего, т.е. неизвестное значение.
*/


// task_8:

let val = +prompt('Enter a number: ')
let pow = +prompt('Enter a power: ')

function power(val, pow) {

    if (pow == 1)
        return val;
    else
        return val * power(val, pow - 1);
}

alert(power(val, pow))

