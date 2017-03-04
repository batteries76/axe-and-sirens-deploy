import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'my-checkout-detail',
  templateUrl: 'app/checkout-detail.component.html',
  // styleUrls: [ 'app/about.component.css' ]
})
export class CheckoutDetailComponent {

  @Input() product: Product;

}
