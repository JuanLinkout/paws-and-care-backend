import {
  internalServerError,
  missingParamError,
  ok,
} from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpRequest, IHttpResponse } from "../../types/http";
import { ICreatePetUseCase } from "../../../domain/use-cases/pets/create-pet-use-case";

export class CreatePetController implements IController {
  private createPet: ICreatePetUseCase;

  constructor(createPet: ICreatePetUseCase) {
    this.createPet = createPet;
  }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    try {
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

      const response = await this.createPet.create({
        customerName,
        customerId,
        name,
        type,
        breed,
      });

      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
