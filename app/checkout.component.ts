import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';
import { ModalService } from './modal.service';


@Component({
  selector: 'my-checkout',
  templateUrl: 'app/checkout.component.html',
  styleUrls: [ 'app/dashboard.component.css' ]
})
export class CheckoutComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    console.log("CHECKOUT oninit")
    this.products = this.productService.getProducts()
    for (let product of this.products){
      if(product.numberOrderedTotal>0){
        this.filteredProducts.push(product);
      }
    }
  }

}
