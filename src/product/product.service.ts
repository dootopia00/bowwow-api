import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  private products: Product[] = [];

  getList(): Product[]{
    return this.products;
  }
  
  getProduct(id:string): Product {

    // parseInt(id) === +id 같은 의미
    // console.log("이건 뭔 product : ", product)
    // return 1;
    
    const product = this.products.find(product => product.id === +id)

    if(!product){
      throw new NotFoundException(`product with id ${id} not found`);
    }

    return product;
  }
  
  deleteOne(id:string):boolean {
    this.products.filter(product => product.id !== +id)
    return true;
  }

  create(productData){
    this.products.push({
        id: this.products.length + 1,
        ...productData,
    })
  }

}
