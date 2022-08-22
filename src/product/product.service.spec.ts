import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {

  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  // it('should be 4', () => {
  //   expect(2+3).toEqual(4);
  // });
  
  describe("getList", () =>{
    console.log('getList');

    it('should return an array', () => {


      const result = service.getList();
      expect(result).toBeInstanceOf(Array);
    });
  })

  describe("getProduct", ()=>{

    console.log('aaaa');
  })
});
  