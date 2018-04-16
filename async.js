let yes = true;
let no = false;
let add = (a, b) => {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
};

add(3, 4);

function by4(num) {
    console.log(num = num * 4);
}

by4(2);

setTimeout(() => { add(4, 7) }, 2000);

function getWords(word1, word2, word3, word4) {
    console.log(word1);
    setTimeout(() => { console.log(word2); }, 2000);
    setTimeout(() => { console.log(word3); }, 0);
    console.log(word4);
};

getWords('one', 'two', 'three', 'four');

function countdown(num, callback) {
    for (let i = num; i >= 1; i--) {
        console.log(i);
    };
    console.log(callback);
    // setTimeout(() => { callback }, ((num - 1) * 1000));
};

function done() {
    return 'Complete!';
};

countdown(10, done());

function orderFood(order) {
    return new Promise((resolve, reject) => {
        if (order == true) {
            let chicken = {
                sandwich: 'chicken',
                veggies: 'lettuce'
            }
            resolve(chicken);
        } else {
            let err = new Error(`Clucking hell, Something went wrong!`)
            reject(err);
        };
    });
};

orderFood(yes).then(
    response => {
        console.log(response)
    },
    err => {
        console.log(err)
    }
);

function num1() {
    return new Promise((resolve, reject) => {
        resolve(1);
    }, 2000);
};

num1()
    .then(result => {
        console.log(result)
        return result
    }).then(result => {
        let multiply = result * 2;
        console.log(multiply);
        return multiply;
    }).then(result => {
        let multiply = result * 4;
        console.log(multiply);
        return multiply;
    }).then(result => {
        let multiply = result * 6;
        console.log(multiply);
        return multiply;
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err)
    });