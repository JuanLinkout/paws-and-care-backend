export interface IDeletePetUseCase {
  delete: (id: string) => Promise<void>;
}
