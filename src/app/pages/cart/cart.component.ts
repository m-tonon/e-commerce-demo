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
        product: '../../../../../../assets/images/products/men/product4.jpg',
        name: 'mens watch',
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: '../../../../../../assets/images/products/men/product3.jpg',
        name: 'snickers',
        price: 150,
        quantity: 2,
        id: 2,
      },
      {
        product: '../../../../../../assets/images/products/men/product2.jpg',
        name: 'men pants',
        price: 150,
        quantity: 1,
        id: 3,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'Product',
    'Name',
    'Price',
    'Quantity',
    'Total'
  ];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }
}
