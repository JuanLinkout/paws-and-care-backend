import { UpdateCustomerImplementation } from "../../../data/use-cases/customers/update-customer-implementation";
import { MongoCustomerRepository } from "../../../infra/db/mongo/customers/customers-repository";
import { UpdateCustomerController } from "../../../presentation/controllers/customers/update-customer-controller";
import { IController } from "../../../presentation/types/controller";

export function makeUpdateCustomerController(): IController {
  const repository = new MongoCustomerRepository();
  const usecase = new UpdateCustomerImplementation(repository);
  const controller = new UpdateCustomerController(usecase);
  return controller;
}
