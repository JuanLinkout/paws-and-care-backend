import { ICreateCustomer } from "../../entities/customer";

export interface ICreateCustomerUseCase {
  create: (customer: ICreateCustomer) => Promise<void>;
}
