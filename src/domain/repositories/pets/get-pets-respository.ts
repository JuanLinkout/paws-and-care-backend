import { IPet } from "../../entities/pet";

export interface IGetPetsRepository {
  get: () => Promise<IPet[]>;
}
