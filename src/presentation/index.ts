import express from "express";

import moviesRoutes from "./routes/movies";

const app = express();
const port = 3000;

app.use(express.json());

app.use(moviesRoutes);

export function start() {
  return new Promise((resolve) => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
      resolve(null);
    });
  });
}
