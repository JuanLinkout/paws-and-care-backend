export interface IGetCustomersRepository {
  delete: (id: string) => Promise<void>;
}
