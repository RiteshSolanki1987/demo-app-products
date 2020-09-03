import { Injectable } from '@angular/core';
import { ProductRepository } from './product.repository';
import { Product } from '../entities/products.model';

@Injectable()

export class ProductService extends ProductRepository<Product> {

    constructor() {
        super();
    }

    /**
     * 
     */
    getAll() {
        return this.request('get', 'products');
    }

    /**
     * 
     * @param id `
     */
    getById(id: string) {
        return this.request('get', id);
    }

    /**
     * 
     * @param key 
     * @param value 
     */
    update(key: string, value: string) {
        return this.request('set',key, value);
    }

    /**
     * 
     * @param key 
     */
    remove(key: string) {
        return this.request('remove', key);
    }
}