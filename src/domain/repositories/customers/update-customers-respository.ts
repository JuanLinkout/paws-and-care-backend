import { ICustomer } from "../../entities/customer";

export interface IUpdateCustomerRepository {
  update: (customer: ICustomer) => Promise<void>;
}
