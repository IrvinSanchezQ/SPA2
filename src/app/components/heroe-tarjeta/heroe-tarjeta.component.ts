import { Component } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class heroeTarjetaComponent {


heroes = [];

constructor ( private serviciosheroes:HeroesService ){
  console.log(this.serviciosheroes.getheroes());
  this.heroes = this.serviciosheroes.getheroes();
}
}