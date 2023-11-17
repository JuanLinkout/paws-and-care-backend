export interface IDeleteCustomersRepository {
  delete: (id: string) => Promise<void>;
}
