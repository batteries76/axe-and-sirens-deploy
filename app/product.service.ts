import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { Product }       from './product';

@Injectable()
export class ProductService {

  private productsUrl = 'app/products';

  productSource: Product[] = [];
  // productSubject: = new Subject<Product[]>();

  cartNumber = new Subject<number>();
  cartCounter: number = 0;

  constructor(private http: Http) {

  }

  getHttpProducts() {
    return this.http.get(this.productsUrl)
               .toPromise()
               .then(response => response.json().data as Product[])
               .catch(this.handleError);
  }

  ngOnInit() {
    console.log("product service OnInit");
    getHttpProducts();
  }

  initialiseProducts(products: Product[]) {
    this.productSource = products;
  }

  getProducts(): Product[] {
    return this.productSource;
  }

  updateProduct(productID: number, myOrder: any) {
    console.log("in UPDATE PRODUCT");
    console.log(this.productSource);
    console.log(productID);
    for (let product of this.productSource){
      console.log("in UPDATE PRODUCT - LOOP");
      console.log(productID);
      console.log(product.id);
      if (product.id == productID){
        console.log("HIT IF");
        product.numberOrderedSmall += +myOrder.value.small;
        product.numberOrderedMedium += +myOrder.value.medium;
        product.numberOrderedLarge += +myOrder.value.large;

        product.numberOrderedTotal = product.numberOrderedSmall + product.numberOrderedMedium + product.numberOrderedLarge;
      }
    }
    // this.productSubject.next(this.productSource);
  }

  getCartTotal(): void {
    this.cartCounter = 0;

    console.log("in CART TOTAL");
    console.log(this.productSource);
    console.log(this.productSource.length);

    for (let product of this.productSource) {
      console.log("GET CART TOTAL -- LOOP");
      this.cartCounter += product.numberOrderedTotal;
    }

    this.cartNumber.next(this.cartCounter);
    console.log("this.cartCounter");
    console.log(this.cartCounter);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getProduct(id: number): Promise<Product> {
    return this.getHttpProducts()
               .then(products => products.find(product => product.id === id));
  }

}
