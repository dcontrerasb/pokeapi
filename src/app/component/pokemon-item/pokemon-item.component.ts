import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/class/pokemon';
import { Sprites } from 'src/app/class/sprites';
import { PokemonService } from 'src/app/services/pokemon.service';



@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent {
  
  pokemon:string|null="";
  pokemones:Pokemon[]=[];

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {

    this.pokemon=route.snapshot.paramMap.get('nombre');

    if(this.pokemon != null){
      //Comprobar que no sea nulo
      this.pokemonService.getPokemon(this.pokemon).subscribe((res) => {
        this.pokemones.push(res);
      });
    }
  }
}
