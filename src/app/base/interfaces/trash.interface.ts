export interface ITrash<T> {
    getAll(item: T): Promise<T>;
    remove(item: T): Promise<T>;
}
