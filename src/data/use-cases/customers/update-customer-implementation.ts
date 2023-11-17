import { ICustomer } from "../../../domain/entities/customer";
import { IUpdateCustomerRepository } from "../../../domain/repositories/customers/update-customers-respository";
import { IUpdateCustomerUseCase } from "../../../domain/use-cases/customers/update-customer-use-case";

export class UpdateCustomerImplementation implements IUpdateCustomerUseCase {
  private updateCustomerRepository: IUpdateCustomerRepository;

  constructor(updateCustomerRepository: IUpdateCustomerRepository) {
    this.updateCustomerRepository = updateCustomerRepository;
  }

  async update(customer: ICustomer): Promise<void> {
    const response = await this.updateCustomerRepository.update(customer);
    return response;
  }
}
