import express from "express";

import moviesController from "../../controllers/movies";

const moviesRouter = express.Router();

moviesRouter.get("/movies", moviesController.readMovies);
moviesRouter.get("/movies/:id", moviesController.readMovie);
moviesRouter.post("/movies", moviesController.createMovie);
moviesRouter.put("/movies", moviesController.updateMovie);
moviesRouter.delete("/movies/:id", moviesController.deleteMovie);

export default moviesRouter;
