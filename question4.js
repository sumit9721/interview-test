const axios = require("axios");

function test() {
    axios.get("www.example.com/api/get/1").then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

test()