import { ICustomer } from "../../../../domain/entities/customer";
import { IGetCustomersRepository } from "../../../../domain/repositories/customers/get-customers-respository";

export class GetCustomersRepositoryMock implements IGetCustomersRepository {
  async get(): Promise<ICustomer[]> {
    return [];
  }
}
