const inventory = require("./inventory");

function car33Details(inventory, id) {
    let requiredCar = inventory.filter((x) => {
        return x.id == id;
    });
    let ans = `Car ${id} is a ${requiredCar[0]['car_year']} ${requiredCar[0]['car_make']} ${requiredCar[0]['car_model']}`;
    return ans;
}

let carId = 33;
console.log(car33Details(inventory, carId));

module.exports = car33Details;
