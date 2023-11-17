import { UpdatePetImplementation } from "../../../data/use-cases/pets/update-pet-implementation";
import { MongoPetRepository } from "../../../infra/db/mongo/pets/pets-repository";
import { UpdatePetController } from "../../../presentation/controllers/pets/update-pet-controller";
import { IController } from "../../../presentation/types/controller";

export function makeUpdatePetController(): IController {
  const repository = new MongoPetRepository();
  const usecase = new UpdatePetImplementation(repository);
  const controller = new UpdatePetController(usecase);
  return controller;
}
