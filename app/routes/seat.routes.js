module.exports = (app) => {
  const controller = require("../controllers/seat.controller.js");

  const router = require("express").Router();

  // Create a new Seat
  router.post("/", controller.create);

  // Retrieve all Seats
  router.get("/", controller.findAll);

  // Retrieve a single Seat with id
  router.get("/:id", controller.findOne);

  // Update a Seat with id
  router.put("/:id", controller.update);

  // Delete a Seat with id
  router.delete("/:id", controller.delete);

  // Delete all Seats
  router.delete("/", controller.deleteAll);

  app.use("/api/seats", router);
};
