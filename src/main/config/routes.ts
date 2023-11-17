import { Express, Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeGetCustomersController } from "../factories/customers/get-customers-controller";
import { makeGetPetsController } from "../factories/pets/get-pets-controller";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use(router);

  // Customers
  router.get("/customers", adaptRoute(makeGetCustomersController()));

  // Pets
  router.get("/pets", adaptRoute(makeGetPetsController()));
};
