import { Injectable } from '@angular/core';
import { ProductRepository } from './product.repository';
import { IProduct } from '../../../base/interfaces/products.interface';
import { Product } from '../entities/products.model';

@Injectable()

export class ProductUseCase implements IProduct<Product> {

    constructor(private productRepository: ProductRepository<Product>) {
        //TODO:
    }

    /**
     * 
     */
    getAll() {
        return this.productRepository.getAll();
    }

    /**
     * 
     * @param id `
     */
    getById(id: string) {
        return this.productRepository.getById(id);
    }

    /**
     * 
     * @param key 
     * @param value 
     */
    update(key: string, value: string) {
        return this.productRepository.update(key, value);
    }

    /**
     * 
     * @param id Product Id 
     */
    remove(key: string) {
        return this.productRepository.remove(key);
    }
}