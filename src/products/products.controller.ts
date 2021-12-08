import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

interface ProductDto {
  id: string;
  name: string;
}

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param() params) {
    return this.productsService.getProducts().filter((p) => p.id == params.id);
  }

  @Post()
  createProduct(@Body() product: ProductDto) {
    this.productsService.createProduct(product);
  }

  @Delete()
  deleteProduct(@Body() product: ProductDto) {
    this.productsService.deleteProduct(product.id);
  }
}
