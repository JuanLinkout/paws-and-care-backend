import { ICustomer } from "../../entities/customer";

export interface IUpdateCustomerUseCase {
  update: (customer: ICustomer) => Promise<void>;
}
