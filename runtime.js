const perf = require('execution-time')();

function doublerAppend(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }
    return new_nums;
}

function doublerInsert(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
    return new_nums;
}

function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}

const arraySizes = {
    "tinyArray": 10,
    "smallArray": 100,
    "mediumArray": 1000,
    "largeArray": 10000,
    "extraLargeArray": 100000
};

for (const arrayName in arraySizes) {
    const array = getSizedArray(arraySizes[arrayName]);

    // Try it with first function (doublerAppend)
    perf.start(); // Starts timer
    doublerAppend(array);
    let resultsAppend = perf.stop(); // Stops timer and save time results

    // Try it with second function (doublerInsert)
    perf.start();
    doublerInsert(array);
    let resultsInsert = perf.stop();

    console.log(`Results for ${arrayName}`);
    console.log("unshift", resultsInsert.preciseWords);
    console.log("push", resultsAppend.preciseWords);
    console.log("------------------------------------");
}