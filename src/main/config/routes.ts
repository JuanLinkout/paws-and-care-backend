import { Express, Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";

import { makeGetPetsController } from "../factories/pets/get-pets-controller";
import { makeCreatePetController } from "../factories/pets/create-pet-controller";
import { makeUpdatePetController } from "../factories/pets/update-pet-controller";
import { makeDeletePetController } from "../factories/pets/delete-pet-controller";

import { makeGetCustomersController } from "../factories/customers/get-customers-controller";
import { makeCreateCustomerController } from "../factories/customers/create-customer-controller";
import { makeUpdateCustomerController } from "../factories/customers/update-customer-controller";
import { makeDeleteCustomerController } from "../factories/customers/delete-customer-controller";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use(router);

  // Customers
  router.get("/customers", adaptRoute(makeGetCustomersController()));
  router.post("/customers", adaptRoute(makeCreateCustomerController()));
  router.put("/customers/:id", adaptRoute(makeUpdateCustomerController()));
  router.delete("/customers/:id", adaptRoute(makeDeleteCustomerController()));

  // Pets
  router.get("/pets", adaptRoute(makeGetPetsController()));
  router.post("/pets", adaptRoute(makeCreatePetController()));
  router.put("/pets/:id", adaptRoute(makeUpdatePetController()));
  router.delete("/pets/:id", adaptRoute(makeDeletePetController()));
};
