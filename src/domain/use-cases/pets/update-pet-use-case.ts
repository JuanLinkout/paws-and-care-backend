import { IPet } from "../../entities/pet";

export interface IUpdatePetUseCase {
  update: (Pet: IPet) => Promise<void>;
}
