import { IPet } from "../../../../domain/entities/pet";
import { IGetPetsRepository } from "../../../../domain/repositories/pets/get-pets-respository";

export class GetPetsRepositoryMock implements IGetPetsRepository {
  async get(): Promise<IPet[]> {
    return [];
  }
}
