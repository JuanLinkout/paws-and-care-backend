import { DeleteCustomerImplementation } from "../../../data/use-cases/customers/delete-customer-implementation";
import { MongoCustomerRepository } from "../../../infra/db/mongo/customers/customers-repository";
import { DeleteCustomerController } from "../../../presentation/controllers/customers/delete-customer-controller";
import { IController } from "../../../presentation/types/controller";

export function makeDeleteCustomerController(): IController {
  const repository = new MongoCustomerRepository();
  const usecase = new DeleteCustomerImplementation(repository);
  const controller = new DeleteCustomerController(usecase);
  return controller;
}
