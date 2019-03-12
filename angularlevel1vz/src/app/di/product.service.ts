import {Injectable} from '@angular/core';

import {Product} from './product'

@Injectable()
export class ProductService {

  //Service
  getProduct(): Product {
    return new Product
    ( 1, "iPhone 7", 249.99, 
        "The latest iPhone, 7-inch screen");
    }
}
/*
  Naming conventions:
    product.ts
    product.component.html
    product.service.ts
    product.component.ts
    product.directive.ts
    product.pipe.ts
    product.module.ts
*/