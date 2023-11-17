import { IPet } from "../../entities/pet";

export interface IGetPetsUseCase {
  get: () => Promise<IPet[]>;
}
