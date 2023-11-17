import { ICreatePet } from "../../../domain/entities/pet";
import { ICreatePetRepository } from "../../../domain/repositories/pets/create-pet-respository";
import { ICreatePetUseCase } from "../../../domain/use-cases/pets/create-pet-use-case";

export class CreatePetImplementation implements ICreatePetUseCase {
  private createPetRepository: ICreatePetRepository;

  constructor(createPetRepository: ICreatePetRepository) {
    this.createPetRepository = createPetRepository;
  }

  async create(pet: ICreatePet): Promise<void> {
    const response = await this.createPetRepository.create(pet);
    return response;
  }
}
