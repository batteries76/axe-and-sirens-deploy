import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router }            from '@angular/router';

import { Product }           from './product';
import { ProductService }    from './product.service';
import { ModalService }      from './modal.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: [ 'app/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];
//  @Output() showDialog: boolean = false;
//  modalPop: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, private productService: ProductService, private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.productService.getHttpProducts()
      .then(products => {
        this.products = products;
        this.productService.initialiseProducts(products);
        });
  }

  // ngOnInit(): void {
  //   this.products = this.productService.getProducts();
  // }

  popIt(product: Product): void {
    console.log("DASHBOARD: popIt");
    this.modalService.setCurrentModal(product);
  }

  printSomething(name: string, showDialog: boolean, product: Product): void {
    console.log('clicked on this one in DASHBOARD!');
    console.log(name);
    console.log(showDialog);
    console.log(product);
  }

}
