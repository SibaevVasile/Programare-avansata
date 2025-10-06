import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.css']
})
export class OrderDetailComponent {

  order = {
    id: 101,
    client: 'Ion Popescu',
    address: 'Str. Florilor 23, Chișinău',
    status: 'În livrare',
    total: 185,
    items: [
      { product: 'Pizza Margherita', quantity: 1, price: 70 },
      { product: 'Pizza Pepperoni', quantity: 1, price: 80 },
    ]
  };

}
