import { Component, OnInit, Renderer2 } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme$: Observable<string>;
  lang$: Observable<string>;

  private currentTheme: string = 'light';

  constructor(private settings: SettingsService, private renderer: Renderer2) {
    this.theme$ = this.settings.theme$;
    this.lang$ = this.settings.lang$;
  }

  ngOnInit() {
    // Ascultă schimbările pentru temă
    this.settings.theme$.subscribe(theme => {
      this.currentTheme = theme;
      this.updateTheme();
    });
  }

  updateTheme() {
    this.renderer.removeClass(document.body, 'light');
    this.renderer.removeClass(document.body, 'dark');
    this.renderer.addClass(document.body, this.currentTheme);
  }

  toggleTheme() {
    this.settings.toggleTheme();
  }

  toggleLanguage() {
    this.settings.toggleLanguage();
  }
}
