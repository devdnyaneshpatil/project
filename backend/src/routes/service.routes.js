const {
  createServiceController,
  getAllServicesController,
  getServicesController,
} = require("../controllers/service.controllers");
const auth = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/authorize.middleware");

const serviceRouter = require("express").Router();

serviceRouter.post(
  "/create-service",
  auth,
  authorize(["Provider"]),
  createServiceController
);
serviceRouter.get("/", getAllServicesController);
serviceRouter.get("/:id", getServicesController);

module.exports = serviceRouter;
