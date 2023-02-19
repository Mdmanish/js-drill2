const inventory = require("./inventory");

function sortCarModels(inventory) {
    inventory = inventory.sort((a, b) => {
        if (a.car_model > b.car_model) return 1;
        else return -1;
    }
    );
    return inventory;
}

console.log(sortCarModels(inventory));

module.exports = sortCarModels;