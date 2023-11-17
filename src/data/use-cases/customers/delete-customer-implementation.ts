import { IDeleteCustomersRepository } from "../../../domain/repositories/customers/delete-customers-respository";
import { IDeleteCustomerUseCase } from "../../../domain/use-cases/customers/delete-customer-use-case";

export class DeleteCustomerImplementation implements IDeleteCustomerUseCase {
  private deleteCustomerRepository: IDeleteCustomersRepository;

  constructor(deleteCustomerRepository: IDeleteCustomersRepository) {
    this.deleteCustomerRepository = deleteCustomerRepository;
  }

  async delete(id: string): Promise<void> {
    const response = await this.deleteCustomerRepository.delete(id);
    return response;
  }
}
