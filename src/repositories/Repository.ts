export interface IRepository<T> {
  getAll(): Promise<T[]>
  create(data: T): Promise<T>
}
