import { GetCustomersImplementation } from "../../../data/use-cases/customers/get-customers-implementation";
import { GetCustomersRepositoryMock } from "../../../infra/db/mock/customers/get-customers-mock";
import { GetCustomersController } from "../../../presentation/controllers/customers/get-customers-controller";
import { IController } from "../../../presentation/types/controller";

export function makeGetCustomersController(): IController {
  const repository = new GetCustomersRepositoryMock();
  const usecase = new GetCustomersImplementation(repository);
  const controller = new GetCustomersController(usecase);
  return controller;
}
