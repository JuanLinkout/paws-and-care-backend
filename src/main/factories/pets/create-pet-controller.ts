import { CreatePetImplementation } from "../../../data/use-cases/pets/create-pet-implementation";
import { MongoPetRepository } from "../../../infra/db/mongo/pets/pets-repository";
import { CreatePetController } from "../../../presentation/controllers/pets/create-pet-controller";
import { IController } from "../../../presentation/types/controller";

export function makeCreatePetController(): IController {
  const repository = new MongoPetRepository();
  const usecase = new CreatePetImplementation(repository);
  const controller = new CreatePetController(usecase);
  return controller;
}
