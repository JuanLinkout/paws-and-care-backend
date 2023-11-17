import { ICustomer } from "../../../domain/entities/customer";
import { IUpdateCustomerUseCase } from "../../../domain/use-cases/customers/update-customer-use-case";
import {
  internalServerError,
  missingParamError,
  ok,
} from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpRequest, IHttpResponse } from "../../types/http";

export class UpdateCustomerController implements IController {
  private updateCustomer: IUpdateCustomerUseCase;

  constructor(updateCustomer: IUpdateCustomerUseCase) {
    this.updateCustomer = updateCustomer;
  }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { document, email, name, phone } = req.body;
      const { id } = req.pathParams;

      const requiredFields = ["document", "email", "name", "phone"];

      if (!id) return missingParamError("id");

      for (const field of requiredFields) {
        if (req.body[field] === null || req.body[field] === undefined) {
          return missingParamError(field);
        }
      }

      const customer: ICustomer = { document, email, name, phone, id };
      const response = await this.updateCustomer.update(customer);

      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
