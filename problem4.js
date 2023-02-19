const inventory = require("./inventory");

function carsYear(inventory) {
    let ans = inventory.map((x) => {
        return x.car_year;
    });
    return ans;
}

let carsYearArray = carsYear(inventory);
console.log(carsYearArray);

module.exports = { arrayOfYears: carsYearArray, functionCarYear: carsYear };
