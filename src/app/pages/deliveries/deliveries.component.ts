import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../services/settings.service';
import { Observable } from 'rxjs';

interface Delivery {
  id: number;
  client: string;
  address: string;
  statusRo: string;
  statusEn: string;
}

@Component({
  selector: 'app-deliveries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.css']
})
export class DeliveriesComponent {
  deliveries: Delivery[] = [
    { id: 101, client: 'Ion Popescu', address: 'Str. Libertății 12', statusRo: 'În livrare', statusEn: 'In delivery' },
    { id: 102, client: 'Maria Ionescu', address: 'Str. Primăverii 7', statusRo: 'Pregătire', statusEn: 'Preparing' },
    { id: 103, client: 'Andrei Vasilescu', address: 'Str. Independenței 23', statusRo: 'Finalizată', statusEn: 'Completed' },
    { id: 104, client: 'Elena Dinu', address: 'Str. Mihai Eminescu 5', statusRo: 'Preluată', statusEn: 'Picked up' }
  ];

  lang$: Observable<string>;

  constructor(private settings: SettingsService) {
    this.lang$ = this.settings.lang$; // async în template
  }
}
