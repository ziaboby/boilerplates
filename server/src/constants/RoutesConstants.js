const routesPath = require("../../../shared/routesPath");

module.exports = {
    getPosts: {
        method: 'GET',
        label: 'Retrieve all available posts',
        path: routesPath.getPosts,
        controller: null
    }
} 