import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Nu mai declarăm componentele standalone aici
  ],
  imports: [
    BrowserModule
    // Dacă folosești forme sau HTTP, le poți adăuga aici:
    // FormsModule, HttpClientModule etc.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
