import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from './product';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {

  title = 'Axe and Sirens';

  initModal: boolean;
  showDialog: boolean;
  currentProductInModal: Product;
  cartTotal: number = 0;

  constructor(private modalService: ModalService, private productService: ProductService) {

    this.productService.cartNumber.subscribe((total) => {
      this.cartTotal = total;
      console.log("TOTAL is: " + total);
      console.log("this.cartTotal is: " + this.cartTotal);
    });

    this.showDialog = false;

//    this.showDialog = modalService.modalShowing;
    modalService.modalShowing.subscribe((value) => {
      this.showDialog = value;
      console.log("value is: " + value);
      console.log("this.showDialog = " + this.showDialog);
    });

//    this.currentProductInModal = modalService.currentProductModal;

    modalService.currentProductModal.subscribe((product) => {
      this.currentProductInModal = product;
      console.log(product);
      console.log("this.currentProductInModal = " + this.currentProductInModal);
    });

    this.initModal = false;
//    this.initModal = modalService.modalInit;

    modalService.modalInit.subscribe((bool) => {
      this.initModal = bool;
      console.log("bool is: " + bool);
      console.log("this.initModal = " + this.initModal);
    });
  }

}
