const RoutesConstants = require("../constants/RoutesConstants");

module.exports = (req, res, next) => {
    if (!req.route) {
        if (req.header('accept') === '*/*' || req.header('accept').indexOf('application/json') !== -1) {
            res.set('Content-Type', 'application/json')
                .status(404)
                .send(Object.values(RoutesConstants).map(route => ({ path: route.path, method: route.method, description: route.label })))
        } else {
            res.set('Content-Type', 'text/txt')
                .status(404)
                .send(`Available API endpoints:\n${Object.values(RoutesConstants).map(route => '/api' + route.path + ' \t ' + route.method + ' \t ' + route.label + '\n').join('')}`);
        }
    }
    next();
}