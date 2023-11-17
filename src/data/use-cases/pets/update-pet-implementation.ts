import { IPet } from "../../../domain/entities/pet";
import { IUpdatePetRepository } from "../../../domain/repositories/pets/update-pet-respository";
import { IUpdatePetUseCase } from "../../../domain/use-cases/pets/update-pet-use-case";

export class UpdatePetImplementation implements IUpdatePetUseCase {
  private updatePetRepository: IUpdatePetRepository;

  constructor(updatePetRepository: IUpdatePetRepository) {
    this.updatePetRepository = updatePetRepository;
  }

  async update(customer: IPet): Promise<void> {
    const response = await this.updatePetRepository.update(customer);
    return response;
  }
}
