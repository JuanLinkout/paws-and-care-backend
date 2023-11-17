import { ICreatePet } from "../../entities/pet";

export interface ICreatePetUseCase {
  create: (Pet: ICreatePet) => Promise<void>;
}
