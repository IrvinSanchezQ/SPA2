import { Component } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class heroeComponent {

  heroe = [];

  constructor ( private serviciosheroes:HeroesService ){
    console.log(this.serviciosheroes.getheroes());
    this.heroe = this.serviciosheroes.getheroes();
  }
  

  


}