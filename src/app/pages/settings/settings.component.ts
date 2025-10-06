import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../services/settings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.css']
})
export class SettingsComponent {
  theme$: Observable<string>;
  lang$: Observable<string>;

  constructor(private settings: SettingsService) {
    this.theme$ = this.settings.theme$;
    this.lang$ = this.settings.lang$;
  }

  toggleTheme() {
    this.settings.toggleTheme();
  }

  toggleLanguage() {
    this.settings.toggleLanguage();
  }
}
