import { ServerError } from "../errors/server-error";
import { IHttpResponse } from "../types/http";

export const ok = (body?: any): IHttpResponse => ({
  body: JSON.stringify(body),
  statusCode: 200,
});

export const internalServerError = (): IHttpResponse => ({
  body: new ServerError(),
  statusCode: 500,
});

export const missingParamError = (id: string): IHttpResponse => ({
  body: new Error(),
  statusCode: 500,
});
