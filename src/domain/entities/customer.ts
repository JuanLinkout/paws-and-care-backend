export interface ICustomer {
  id: string;
  name: string;
  email: string;
  document: string;
  phone: string;
}

export interface ICreateCustomer {
  name: string;
  email: string;
  document: string;
  phone: string;
}
