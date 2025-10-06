import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // dacă folosești input-uri

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.css']
})
export class SettingsComponent {
  username = 'admin';
  email = 'admin@pizzaria.md';

  theme = 'light';
  language = 'ro';

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }

  changeLanguage(lang: string) {
    this.language = lang;
  }

}
