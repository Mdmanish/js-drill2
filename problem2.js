const inventory = require("./inventory");

function lastCarDetails(inventory) {
    let index = inventory.length;
    let requiredCar = inventory.filter((x) => {
        return x.id == index;
    });
    let ans = `Last car is a ${requiredCar[0]['car_make']} ${requiredCar[0]['car_model']}`;
    return ans;
}

console.log(lastCarDetails(inventory));

module.exports = lastCarDetails;
