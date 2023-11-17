import { IDeletePetUseCase } from "../../../domain/use-cases/pets/delete-pet-use-case";
import {
  internalServerError,
  missingParamError,
  ok,
} from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpRequest, IHttpResponse } from "../../types/http";

export class DeletePetController implements IController {
  private deletePet: IDeletePetUseCase;

  constructor(deletePet: IDeletePetUseCase) {
    this.deletePet = deletePet;
  }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { id } = req.pathParams;

      if (!id) return missingParamError("id");
      const response = await this.deletePet.delete(id);

      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
