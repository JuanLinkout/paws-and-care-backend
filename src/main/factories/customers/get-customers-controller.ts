import { GetCustomersImplementation } from "../../../data/use-cases/customers/get-customers-implementation";
import { MongoCustomerRepository } from "../../../infra/db/mongo/customers/customers-repository";
import { GetCustomersController } from "../../../presentation/controllers/customers/get-customers-controller";
import { IController } from "../../../presentation/types/controller";

export function makeGetCustomersController(): IController {
  const repository = new MongoCustomerRepository();
  const usecase = new GetCustomersImplementation(repository);
  const controller = new GetCustomersController(usecase);
  return controller;
}
