algoritmo = require("algoritmo.js"); 

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({"sizes" : algoritmo(event)}),
    };
    return response;
};
