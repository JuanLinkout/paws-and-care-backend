export interface IDeleteCustomerUseCase {
  delete: (id: string) => Promise<void>;
}
