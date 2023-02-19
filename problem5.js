let { arrayOfYears } = require("./problem4")

function olderCars(arrayOfYears, olderThan) {
    let numOfOlderCar = 0;
    let ans = arrayOfYears.filter((x) => {
        if (x < olderThan) {
            numOfOlderCar++;
            return x;
        }
    });

    console.log(numOfOlderCar);
    return ans;
}

olderThan = 2000;
olderCarsArray = olderCars(arrayOfYears, olderThan);
console.log(olderCarsArray);

module.exports = olderCars;