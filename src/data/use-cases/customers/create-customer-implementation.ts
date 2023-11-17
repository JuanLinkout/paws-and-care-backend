import { ICreateCustomer } from "../../../domain/entities/customer";
import { ICreateCustomerRepository } from "../../../domain/repositories/customers/create-customers-respository";
import { ICreateCustomerUseCase } from "../../../domain/use-cases/customers/create-customer-use-case";

export class CreateCustomerImplementation implements ICreateCustomerUseCase {
  private createCustomerRepository: ICreateCustomerRepository;

  constructor(createCustomerRepository: ICreateCustomerRepository) {
    this.createCustomerRepository = createCustomerRepository;
  }

  async create(customer: ICreateCustomer): Promise<void> {
    const response = await this.createCustomerRepository.create(customer);
    return response;
  }
}
