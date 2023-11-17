import { ICustomer } from "../../entities/customer";

export interface IGetCustomersRepository {
  get: () => Promise<ICustomer[]>;
}
