const { Router } = require('express');

const MovieTagsController = require("../controllers/MovieTagsController")

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const movie_tagsRoutes = Router();

const movie_tagsController = new MovieTagsController();

movie_tagsRoutes.get("/", ensureAuthenticated, movie_tagsController.index);

module.exports = movie_tagsRoutes;