import { GetPetsImplementation } from "../../../data/use-cases/pets/get-pets-implementation";
import { GetPetsRepositoryMock } from "../../../infra/db/mock/pets/get-pets-mock";
import { GetPetsController } from "../../../presentation/controllers/pets/get-pets-controller";
import { IController } from "../../../presentation/types/controller";

export function makeGetPetsController(): IController {
  const repository = new GetPetsRepositoryMock();
  const usecase = new GetPetsImplementation(repository);
  const controller = new GetPetsController(usecase);
  return controller;
}
