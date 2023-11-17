import { ICreateCustomer } from "../../../domain/entities/customer";
import { ICreateCustomerUseCase } from "../../../domain/use-cases/customers/create-customer-use-case";
import {
  internalServerError,
  missingParamError,
  ok,
} from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpRequest, IHttpResponse } from "../../types/http";

export class GetCustomersController implements IController {
  private createCustomer: ICreateCustomerUseCase;

  constructor(createCustomer: ICreateCustomerUseCase) {
    this.createCustomer = createCustomer;
  }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { document, email, name, phone } = req.body;
      const requiredFields = ["document", "email", "name", "phone"];

      for (const field of requiredFields) {
        if (req.body[field] === null || req.body[field] === undefined) {
          return missingParamError(field);
        }
      }

      const customer: ICreateCustomer = { document, email, name, phone };
      const response = await this.createCustomer.create(customer);

      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
