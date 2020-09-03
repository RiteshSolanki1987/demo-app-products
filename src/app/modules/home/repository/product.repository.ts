import { BaseResponse } from '../../../base/base.response';

export abstract class ProductRepository<T> extends BaseResponse {
    abstract getAll();
    abstract getById(id: string);
    abstract update(key: string, value: string);
    abstract remove(key: string);
}