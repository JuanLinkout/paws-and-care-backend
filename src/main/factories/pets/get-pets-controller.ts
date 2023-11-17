import { GetPetsImplementation } from "../../../data/use-cases/pets/get-pets-implementation";
import { MongoPetRepository } from "../../../infra/db/mongo/pets/pets-repository";
import { GetPetsController } from "../../../presentation/controllers/pets/get-pets-controller";
import { IController } from "../../../presentation/types/controller";

export function makeGetPetsController(): IController {
  const repository = new MongoPetRepository();
  const usecase = new GetPetsImplementation(repository);
  const controller = new GetPetsController(usecase);
  return controller;
}
