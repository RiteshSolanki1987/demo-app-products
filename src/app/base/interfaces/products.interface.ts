export interface IProduct<T> {
    getAll();
    getById(id: string);
    update(key: string, value: string);
    remove(key: string);
}
