import { IUpdatePetUseCase } from "../../../domain/use-cases/pets/update-pet-use-case";
import {
  internalServerError,
  missingParamError,
  ok,
} from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpRequest, IHttpResponse } from "../../types/http";

export class UpdatePetController implements IController {
  private updatePet: IUpdatePetUseCase;

  constructor(updatePet: IUpdatePetUseCase) {
    this.updatePet = updatePet;
  }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = req.pathParams;
      if (!id) return missingParamError("id");

      const { customerName, customerId, name, type, breed } = req.body;
      const requiredFields = [
        "name",
        "customerName",
        "customerId",
        "type",
        "breed",
      ];

      for (const field of requiredFields) {
        if (req.body[field] === null || req.body[field] === undefined) {
          return missingParamError(field);
        }
      }

      const response = await this.updatePet.update({
        customerName,
        customerId,
        name,
        type,
        breed,
        id,
      });

      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
