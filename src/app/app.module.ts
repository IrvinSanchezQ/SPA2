import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { aboutComponent } from './components/about/about.component';
import { buscadorComponent } from './components/buscador/buscador.component';
import { heroeComponent } from './components/heroe/heroe.component';
import { heroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { heroesComponent } from './components/heroes/heroes.component';
import { homeComponent } from './components/home/home.component';
import { navbarComponent } from 'src/app/components/shared/navbar.component';


@NgModule({
  declarations: [
    AppComponent, 
    aboutComponent,
    buscadorComponent,
    heroeComponent,
    heroeTarjetaComponent,
    heroesComponent,
    homeComponent, 
    navbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
