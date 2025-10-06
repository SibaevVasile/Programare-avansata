import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../services/settings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  lang$: Observable<string>;

  constructor(private settings: SettingsService) {
    this.lang$ = this.settings.lang$; // ✅ corectat aici
  }

  stats = [
    { labelRo: 'Comenzi active', labelEn: 'Active Orders', value: 12 },
    { labelRo: 'Comenzi finalizate', labelEn: 'Completed Orders', value: 84 },
    { labelRo: 'Produse în meniu', labelEn: 'Menu Items', value: 26 },
    { labelRo: 'Livratori disponibili', labelEn: 'Available Couriers', value: 4 }
  ];

  recentOrders = [
    { id: 101, client: 'Ion Popescu', total: 185, statusRo: 'În livrare', statusEn: 'Delivering' },
    { id: 102, client: 'Maria Ionescu', total: 92, statusRo: 'Pregătire', statusEn: 'Preparing' },
    { id: 103, client: 'Andrei Vasilescu', total: 125, statusRo: 'Finalizată', statusEn: 'Completed' },
    { id: 104, client: 'Elena Dinu', total: 74, statusRo: 'Preluată', statusEn: 'Picked up' },
  ];
}
