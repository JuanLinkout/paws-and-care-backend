export interface IHttpRequest {
  body?: any;
  queryParams?: any;
  pathParams?: any;
}

export interface IHttpResponse {
  statusCode: number;
  body: any;
}
