const express = require('express')
const router = express.Router()
const routes = require('../constants/RoutesConstants')

router.get(routes.getPosts.path, routes.getPosts.controller)

module.exports = router  