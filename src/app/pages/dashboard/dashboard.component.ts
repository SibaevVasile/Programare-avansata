import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // pentru *ngFor

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  // 🔹 Statistici rapide
  stats = [
    { label: 'Comenzi active', value: 12 },
    { label: 'Comenzi finalizate', value: 84 },
    { label: 'Produse în meniu', value: 26 },
    { label: 'Livratori disponibili', value: 4 }
  ];

  // 🔹 Ultimele comenzi (date mock)
  recentOrders = [
    { id: 101, client: 'Ion Popescu', total: 185, status: 'În livrare' },
    { id: 102, client: 'Maria Ionescu', total: 92, status: 'Pregătire' },
    { id: 103, client: 'Andrei Vasilescu', total: 125, status: 'Finalizată' },
    { id: 104, client: 'Elena Dinu', total: 74, status: 'Preluată' },
  ];

}
