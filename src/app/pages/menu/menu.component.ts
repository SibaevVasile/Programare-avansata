import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../services/settings.service';
import { Observable } from 'rxjs';

interface MenuItem {
  nameRo: string;
  nameEn: string;
  price: number;
  descriptionRo: string;
  descriptionEn: string;
  image: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent {
  menuItems: MenuItem[] = [
  { nameRo: 'Pizza Margherita', nameEn: 'Margherita Pizza', price: 100,
    descriptionRo: 'Roșii, mozzarella, busuioc', descriptionEn: 'Tomato, mozzarella, basil',
    image: 'pizza-margherita.jpg' },

  { nameRo: 'Pizza Quattro Formaggi', nameEn: 'Four Cheese Pizza', price: 120,
    descriptionRo: 'Mozzarella, gorgonzola, parmezan, brânză de capră', descriptionEn: 'Mozzarella, gorgonzola, parmesan, goat cheese',
    image: 'pizza-quattro.jpg' },

  { nameRo: 'Pizza Pepperoni', nameEn: 'Pepperoni Pizza', price: 110,
    descriptionRo: 'Mozzarella, salam pepperoni', descriptionEn: 'Mozzarella, pepperoni sausage',
    image: 'pizza-pepperoni.jpg' },

  { nameRo: 'Salată Caesar', nameEn: 'Caesar Salad', price: 75,
    descriptionRo: 'Salată, pui, parmezan, sos Caesar', descriptionEn: 'Lettuce, chicken, parmesan, Caesar dressing',
    image: 'caesar-salad.jpg' }
];


  lang$: Observable<string>;

  constructor(private settings: SettingsService) {
    this.lang$ = this.settings.lang$; // folosit în template
  }
}
