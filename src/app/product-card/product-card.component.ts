import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
 product = {name: 'Neckless', code: '123456', price: 12.34, description: 'Text for the product. Dammy text is here.'};
 cartItem = {inCart: false, quantity: 0}
 favorite = false;


 onFavorite(): void {
  this.favorite = !this.favorite;
 }

 addToCart() {
  this.cartItem.inCart = true;
  this.cartItem.quantity ++;
  console.log(this.cartItem)
 }

}
