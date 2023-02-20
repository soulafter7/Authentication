const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
// const endpointsFiles = ['./endpoints.js']
const endpointsFiles = ['./routes/index.js']

const doc = {
    info: {
        version: "2.0.0",
        title: "Authentication API",
        description: "Authentication API"
    },
    // host: "localhost:8083",
    host: "localhost:3000",
    basePath: "/",
    // schemes: ['http', 'https'],
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
    // , securityDefinitions: {
    //     api_key: {
    //         type: "apiKey",
    //         name: "api_key",
    //         in: "header"
    //     },
    //     petstore_auth: {
    //         type: "oauth2",
    //         authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
    //         flow: "implicit",
    //         scopes: {
    //             read_pets: "read your pets",
    //             write_pets: "modify pets in your account"
    //         }
    //     }
    // }
}

swaggerAutogen(outputFile, endpointsFiles, doc);
