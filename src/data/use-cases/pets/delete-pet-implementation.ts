import { IDeletePetRepository } from "../../../domain/repositories/pets/delete-pet-respository";
import { IDeletePetUseCase } from "../../../domain/use-cases/pets/delete-pet-use-case";

export class DeletePetImplementation implements IDeletePetUseCase {
  private deletePetRepository: IDeletePetRepository;

  constructor(deletePetRepository: IDeletePetRepository) {
    this.deletePetRepository = deletePetRepository;
  }

  async delete(id: string): Promise<void> {
    const response = await this.deletePetRepository.delete(id);
    return response;
  }
}
