import { ICreatePet } from "../../entities/pet";

export interface ICreatePetRepository {
  create: (pet: ICreatePet) => Promise<void>;
}
