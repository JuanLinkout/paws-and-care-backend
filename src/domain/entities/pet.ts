export interface IPet {
  id: string;
  name: string;
  customerName: string;
  customerId: string;
  type: string;
  breed: string;
}

export interface ICreatePet {
  name: string;
  customerName: string;
  customerId: string;
  type: string;
  breed: string;
}
