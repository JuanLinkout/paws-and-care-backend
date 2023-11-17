import { Response, Request } from "express";

import { IController } from "../../presentation/types/controller";
import { IHttpRequest } from "../../presentation/types/http";

export function adaptRoute(
  controller: IController
): (req: Request, res: Response) => void {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body || {},
      pathParams: req.params || {},
      queryParams: req.query || {},
    };

    const response = await controller.handle(httpRequest);
    res.status(response.statusCode).send(response.body);
  };
}
