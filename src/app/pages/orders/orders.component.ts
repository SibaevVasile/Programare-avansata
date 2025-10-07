import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingsService } from '../../services/settings.service';

interface Order {
  id: number;
  client: string;
  total: number;
  statusRo: string;
  statusEn: string;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.css']
})
export class OrdersComponent {
  orders: Order[] = [
    { id: 101, client: 'Ion Popescu', total: 310, statusRo: 'În livrare', statusEn: 'In delivery' },
    { id: 102, client: 'Maria Ionescu', total: 120, statusRo: 'Pregătire', statusEn: 'Preparing' },
    { id: 103, client: 'Andrei Vasilescu', total: 185, statusRo: 'Finalizată', statusEn: 'Completed' },
    { id: 104, client: 'Elena Dinu', total: 175, statusRo: 'Preluată', statusEn: 'Picked up' }
  ];

  lang$: Observable<string>; // 🔹 Observable pentru limba curentă

  constructor(private settings: SettingsService, private router: Router) {
    this.lang$ = this.settings.lang$; 
}
  goToOrderDetail(orderId: number) {
    this.router.navigate(['/orders', orderId]); // ✅ Folosim routerul, deci eroarea dispare
  }

}
