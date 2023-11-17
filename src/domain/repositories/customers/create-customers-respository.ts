import { ICreateCustomer } from "../../entities/customer";

export interface ICreateCustomerRepository {
  create: (customer: ICreateCustomer) => Promise<void>;
}
