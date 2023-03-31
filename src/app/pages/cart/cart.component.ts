import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [],
})

export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: '../../../../../../assets/images/products/women/product4.jpg',
        name: 'womens skirt',
        price: 150,
        quantity: 1,
        id: 1,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'Product',
    'Name',
    'Price',
    'Quantity',
    'Total',
    ''
  ];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
}
