import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private theme = new BehaviorSubject<string>('light');
  private language = new BehaviorSubject<string>('ro');

  theme$ = this.theme.asObservable();
  lang$ = this.language.asObservable();

  toggleTheme() {
    const newTheme = this.theme.value === 'light' ? 'dark' : 'light';
    this.theme.next(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  toggleLanguage() {
    const newLang = this.language.value === 'ro' ? 'en' : 'ro';
    this.language.next(newLang);
    localStorage.setItem('lang', newLang);
  }

  getCurrentTheme(): string {
    return this.theme.value;
  }

  getCurrentLang(): string {
    return this.language.value;
  }

  loadSettings() {
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('lang');

    if (savedTheme) this.theme.next(savedTheme);
    if (savedLang) this.language.next(savedLang);
  }
}
