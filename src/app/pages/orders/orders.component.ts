import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.css']
})
export class OrdersComponent {

  orders = [
    { id: 101, client: 'Ion Popescu', total: 185, status: 'În livrare' },
    { id: 102, client: 'Maria Ionescu', total: 92, status: 'Pregătire' },
    { id: 103, client: 'Andrei Vasilescu', total: 125, status: 'Finalizată' },
    { id: 104, client: 'Elena Dinu', total: 74, status: 'Preluată' },
  ];

}
