import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ProductService } from './product.service';

import { Product } from './product';

@Component({
  selector: 'my-modal-order-area',
  templateUrl: 'app/modal-order-area.component.html',
  styleUrls: [ 'app/dashboard.component.css' ]
})
export class ModalOrderAreaComponent implements OnInit {

  myOrderFormGroup: FormGroup;

  @Input() modalProduct: Product;

  small: AbstractControl;
  medium: AbstractControl;
  large: AbstractControl;

  ngOnInit() {}

  setCheckoutProducts(){
    this.productService.getCheckoutProducts();
  }

  constructor(fb: FormBuilder, private productService: ProductService) {
    this.myOrderFormGroup = fb.group({
      'small': ['0'],
      'medium': ['0'],
      'large': ['0']
    });

    this.small = this.myOrderFormGroup.controls['small'];
    this.medium = this.myOrderFormGroup.controls['medium'];
    this.large = this.myOrderFormGroup.controls['large'];
  }

  onAddToCart(myOrder: any, productID: number): void {
    console.log('You submitted order = ', myOrder);
    console.log('You submitted myOrder.value = ', myOrder.value);
    console.log('You submitted myOrder.value.small = ', myOrder.value.small);

    console.log("in onAddToCart");
    console.log(productID);
    this.productService.updateProduct(productID, myOrder);
    this.productService.getCartTotal();
  }


}
