import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent {

  menuItems = [
    { name: 'Pizza Margherita', price: 70 },
    { name: 'Pizza Pepperoni', price: 80 },
    { name: 'Pizza Quattro Formaggi', price: 90 },
    { name: 'Salată Caesar', price: 45 },
    { name: 'Suc Cola', price: 35 },
    { name: 'Apă minerală', price: 20 }
  ];

}
