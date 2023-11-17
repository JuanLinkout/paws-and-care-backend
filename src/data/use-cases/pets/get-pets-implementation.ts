import { IPet } from "../../../domain/entities/pet";
import { IGetPetsRepository } from "../../../domain/repositories/pets/get-pets-respository";
import { IGetPetsUseCase } from "../../../domain/use-cases/pets/get-pets-use-case";

export class GetPetsImplementation implements IGetPetsUseCase {
  private getPetsRepository: IGetPetsRepository;

  constructor(getPetsRepository: IGetPetsRepository) {
    this.getPetsRepository = getPetsRepository;
  }

  async get(): Promise<IPet[]> {
    const students = await this.getPetsRepository.get();
    return students;
  }
}
