import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingsService } from '../../services/settings.service';

interface OrderItem {
  nameRo: string;
  nameEn: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  id: number;
  client: string;
  total: number;
  statusRo: string;
  statusEn: string;
  items: OrderItem[];
}

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe],
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.css']
})
export class OrderDetailComponent implements OnInit {
  order?: Order;
  lang$: Observable<string>;
  theme$: Observable<string>;

  // Lista completă de comenzi
  orders: Order[] = [
    {
      id: 101,
      client: 'Ion Popescu',
      total: 310,
      statusRo: 'În livrare',
      statusEn: 'In delivery',
      items: [
        { nameRo: 'Pizza Margherita', nameEn: 'Margherita Pizza', quantity: 2, price: 100, image: 'pizza-margherita.jpg' },
        { nameRo: 'Pizza Pepperoni', nameEn: 'Pepperoni Pizza', quantity: 1, price: 110, image: 'pizza-pepperoni.jpg' }
      ]
    },
    {
      id: 102,
      client: 'Maria Ionescu',
      total: 120,
      statusRo: 'Pregătire',
      statusEn: 'Preparing',
      items: [
        { nameRo: 'Pizza Quattro Formaggi', nameEn: 'Four Cheese Pizza', quantity: 1, price: 120, image: 'pizza-quattro.jpg' }
      ]
    },
    {
      id: 103,
      client: 'Andrei Vasilescu',
      total: 185,
      statusRo: 'Finalizată',
      statusEn: 'Completed',
      items: [
        { nameRo: 'Pizza Pepperoni', nameEn: 'Pepperoni Pizza', quantity: 1, price: 110, image: 'pizza-pepperoni.jpg' },
        { nameRo: 'Salată Caesar', nameEn: 'Caesar Salad', quantity: 1, price: 75, image: 'caesar-salad.jpg' }
      ]
    },
    {
      id: 104,
      client: 'Elena Dinu',
      total: 175,
      statusRo: 'Preluată',
      statusEn: 'Picked up',
      items: [
        { nameRo: 'Pizza Margherita', nameEn: 'Margherita Pizza', quantity: 1, price: 100, image: 'pizza-margherita.jpg' },
        { nameRo: 'Pizza Quattro Formaggi', nameEn: 'Four Cheese Pizza', quantity: 1, price: 75, image: 'pizza-quattro.jpg' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute, private settings: SettingsService) {
    this.lang$ = this.settings.lang$;
    this.theme$ = this.settings.theme$;
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.order = this.orders.find(o => o.id === id);
  }
}
