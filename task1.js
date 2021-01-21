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