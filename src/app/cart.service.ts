import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getItemCount() {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}