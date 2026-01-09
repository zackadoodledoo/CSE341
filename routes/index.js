const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', awesomeFunction);

module.exports = routes;