console.log('This is module');

function average(arr) {
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum / arr.length;
}

// module.exports = average;

module.exports = {
    ave: average,
    name: 'Harry',
    repo: 'GitHub'
}

// module.exports is an object itself
module.exports.nickName = 'John';