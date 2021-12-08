import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products = [
    {
      id: 1,
      name: 'MacBook',
    },
    {
      id: 2,
      name: 'Iphone X',
    },
  ];

  getProducts() {
    return this.products;
  }

  createProduct(product) {
    this.products = [...this.products, { ...product }];
  }

  deleteProduct(id) {
    this.products = this.products.filter((p) => p.id != id);
  }
}
