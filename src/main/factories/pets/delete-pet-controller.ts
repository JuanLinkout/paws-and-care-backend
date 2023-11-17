import { DeletePetImplementation } from "../../../data/use-cases/pets/delete-pet-implementation";
import { MongoPetRepository } from "../../../infra/db/mongo/pets/pets-repository";
import { DeletePetController } from "../../../presentation/controllers/pets/delete-pet-controller";
import { IController } from "../../../presentation/types/controller";

export function makeDeletePetController(): IController {
  const repository = new MongoPetRepository();
  const usecase = new DeletePetImplementation(repository);
  const controller = new DeletePetController(usecase);
  return controller;
}
