import { IGetPetsUseCase } from "../../../domain/use-cases/pets/get-pets-use-case";
import { internalServerError, ok } from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpResponse } from "../../types/http";

export class GetPetsController implements IController {
  private getPets: IGetPetsUseCase;

  constructor(getPets: IGetPetsUseCase) {
    this.getPets = getPets;
  }

  async handle(): Promise<IHttpResponse> {
    try {
      const classResponse = await this.getPets.get();
      return ok(classResponse);
    } catch (e) {
      return internalServerError();
    }
  }
}
