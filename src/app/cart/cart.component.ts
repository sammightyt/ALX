import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { CartItem } from '../cart-item.dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  total = 0;
  items = this.cartService.getItems();

  updateTotal(): void {
    this.total = this.items.reduce((s, c) => s + c.price, 0);
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.updateTotal();
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    alert('Your order has been submitted');
    this.checkoutForm.reset();
    this.updateTotal();
  }

  removeItem(i: CartItem): void {
    this.cartService.removeItem(i);
    this.updateTotal();
  }
}
