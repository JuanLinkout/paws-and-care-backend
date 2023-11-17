import {
  internalServerError,
  missingParamError,
  ok,
} from "../../helpers/http-helper";
import { IDeleteCustomerUseCase } from "../../../domain/use-cases/customers/delete-customer-use-case";
import { IController } from "../../types/controller";
import { IHttpRequest, IHttpResponse } from "../../types/http";

export class DeleteCustomerController implements IController {
  private deleteCustomer: IDeleteCustomerUseCase;

  constructor(deleteCustomer: IDeleteCustomerUseCase) {
    this.deleteCustomer = deleteCustomer;
  }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = req.pathParams;

      if (!id) return missingParamError("id");
      const response = await this.deleteCustomer.delete(id);

      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
