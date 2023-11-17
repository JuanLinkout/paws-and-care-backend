import { ICustomer } from "../../entities/customer";

export interface IGetCustomerUseCase {
  get: () => Promise<ICustomer[]>;
}
