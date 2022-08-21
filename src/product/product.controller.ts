import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { get } from 'http';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  
  constructor(private readonly productService: ProductService){}

  @Get()
  getList(): Product[] {
    // return "get list";
    console.log('getList ')
    return this.productService.getList();
  }

  // @Get("test")
  // findAll(@Req() request: Request): string{
  //   return `Requests : ${Request} `;
  // }

  @Get("search")
  search(@Query("year") searchYear: string, searchDate: string){
    return `search yaer : ${searchYear} , search date : ${searchDate}`;
  }

  @Get('/:id')
  getProduct(@Param("id") productId: string) : Product{
    // return `get Product required id : ${productId}`;
    return this.productService.getProduct(productId);
  }

  @Post()
  create(@Body() productData){
    // console.log("productData : ", productData)
    // return `create api`;
    // return productData;
    return this.productService.create(productData);
  }

  @Delete('/:id')
  remove(@Param("id") productId: string){
    // return `remove required id : ${productId}`;
    return this.productService.deleteOne(productId);
  }

  @Patch('/:id')
  patch(@Param("id") productId: string, @Body() updateData){
    
    // return `remove required id : ${productId}`;
    return {
      updatedProduct: productId,
      ...updateData
    }
  }


}
