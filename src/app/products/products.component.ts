import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';  
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products-style.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, NgxPaginationModule, RouterModule]  
})

export class ProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';

  page: number = 1;
  pageSize: number = 10;

  constructor(public cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get('https://dummyjson.com/products')
      .subscribe((response: any) => {
        this.products = response.products;
        this.filteredProducts = this.products;
        this.categories = [...new Set(this.products.map(product => product.category))];
      });
  }

  onSearch() {
    this.onFilterByCategory();  
  }

  onFilterByCategory() {
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(product =>
        product.category === this.selectedCategory &&
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.title} has been added to your cart!`);
  }
  showCart() {
    const items = this.cartService.getItems();
    if (items.length === 0) {
      alert('Your cart is empty.');
    } else {
      let cartContents = 'Your Cart:\n';
      items.forEach((item, index) => {
        cartContents += `${index + 1}. ${item.title} - $${item.price}\n`;
      });
      alert(cartContents);
    }
  }
}