export interface IDeletePetRepository {
  delete: (id: string) => Promise<void>;
}
