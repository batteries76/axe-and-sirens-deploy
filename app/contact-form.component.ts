import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { ProductService }           from './product.service';

import { ContactMessage }           from './contact-message'

@Component({
  selector: 'my-contact-form',
  templateUrl: 'app/contact-form.component.html',
  styleUrls: [ 'stylesheets/styles.css' ]
})
export class ContactFormComponent {

  // goBack(): void {
  //   window.history.back();
  // }
  //
  // save(): void {
  //   this.productService.update(this.hero)
  //   .then(this.goBack);
  // }

}
