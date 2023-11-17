import { CreateCustomerImplementation } from "../../../data/use-cases/customers/create-customer-implementation";
import { MongoCustomerRepository } from "../../../infra/db/mongo/customers/customers-repository";
import { CreateCustomerController } from "../../../presentation/controllers/customers/create-customer-controller";
import { IController } from "../../../presentation/types/controller";

export function makeCreateCustomerController(): IController {
  const repository = new MongoCustomerRepository();
  const usecase = new CreateCustomerImplementation(repository);
  const controller = new CreateCustomerController(usecase);
  return controller;
}
