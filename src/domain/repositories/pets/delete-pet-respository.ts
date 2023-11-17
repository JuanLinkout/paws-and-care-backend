export interface IGetPetRepository {
  delete: (id: string) => Promise<void>;
}
