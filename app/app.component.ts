import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <img class="banner" src="http://placehold.it/850x300">
    <h1 class="front-component">{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Products</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
      <a routerLink="/checkout" routerLinkActive="active">Checkout</a>
      <a routerLink="/faqs" routerLinkActive="active">FAQs</a>
      <a routerLink="/custom" routerLinkActive="active">Custom</a>
    </nav>
    <router-outlet class="front-component"></router-outlet>
    <my-footer></my-footer>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Axe and Sirens';
}
