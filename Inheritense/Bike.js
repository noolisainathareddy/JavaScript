const gas = require("./Gas.js");

class Bike extends gas{


    startBike(){
        console.log("Started after filling Gas");
    }
}


module.exports = Bike; 