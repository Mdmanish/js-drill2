const { json } = require("stream/consumers");
const inventory = require("./inventory");

function audiBmwCars(inventory) {
    let ans = inventory.filter((x) => {
        if (x.car_make === "Audi" || x.car_make === "BMW")
            return x;
    })
    return ans;
}

let BMWAndAudi = audiBmwCars(inventory);
console.log(JSON.stringify(BMWAndAudi));

module.exports = audiBmwCars;
