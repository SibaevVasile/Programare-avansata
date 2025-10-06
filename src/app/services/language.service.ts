import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langSubject = new BehaviorSubject<string>('ro');
  lang$ = this.langSubject.asObservable();

  toggleLanguage() {
    const current = this.langSubject.value;
    this.langSubject.next(current === 'ro' ? 'en' : 'ro');
  }

  getCurrentLang() {
    return this.langSubject.value;
  }
}
