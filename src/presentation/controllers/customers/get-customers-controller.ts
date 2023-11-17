import { IGetCustomerUseCase } from "../../../domain/use-cases/customers/get-customers-use-case";
import { internalServerError, ok } from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpResponse } from "../../types/http";

export class GetCustomersController implements IController {
  private getCustomers: IGetCustomerUseCase;

  constructor(getCustomers: IGetCustomerUseCase) {
    this.getCustomers = getCustomers;
  }

  async handle(): Promise<IHttpResponse> {
    try {
      const response = await this.getCustomers.get();
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
