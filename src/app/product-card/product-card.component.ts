import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
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
