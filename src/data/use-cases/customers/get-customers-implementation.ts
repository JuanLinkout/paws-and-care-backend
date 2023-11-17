import { ICustomer } from "../../../domain/entities/customer";
import { IGetCustomersRepository } from "../../../domain/repositories/customers/get-customers-respository";
import { IGetCustomerUseCase } from "../../../domain/use-cases/customers/get-customers-use-case";

export class GetCustomersImplementation implements IGetCustomerUseCase {
  private getCustomerRepository: IGetCustomersRepository;

  constructor(getCustomerRepository: IGetCustomersRepository) {
    this.getCustomerRepository = getCustomerRepository;
  }

  async get(): Promise<ICustomer[]> {
    const classResponse = await this.getCustomerRepository.get();
    return classResponse;
  }
}
