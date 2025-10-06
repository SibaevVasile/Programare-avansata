import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideRouter(routes) // Configurează router-ul cu toate rutele
  ]
};
