import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormaComponent } from './forma/forma.component';
import { PrikazComponent } from './prikaz/prikaz.component';

@NgModule({
  declarations: [
    AppComponent,
    FormaComponent,
    PrikazComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
