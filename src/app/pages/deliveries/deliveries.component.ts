import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deliveries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.css']
})
export class DeliveriesComponent {

  deliveries = [
    { id: 101, client: 'Ion Popescu', address: 'Str. Florilor 23', status: 'În livrare' },
    { id: 102, client: 'Maria Ionescu', address: 'Str. Lalelelor 12', status: 'Pregătire' },
    { id: 103, client: 'Andrei Vasilescu', address: 'Str. Soarelui 45', status: 'Finalizată' },
  ];

}
