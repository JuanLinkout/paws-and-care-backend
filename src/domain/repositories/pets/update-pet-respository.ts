import { IPet } from "../../entities/pet";

export interface IUpdatePetRepository {
  update: (pet: IPet) => Promise<void>;
}
