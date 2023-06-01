import { Component } from '@angular/core';
import { Pokemon } from 'src/app/class/pokemon';
import { Sprites } from 'src/app/class/sprites';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private pokemonService: PokemonService){
    let pokemon: Pokemon= new Pokemon(0,new Sprites("", "","","","","","",""),"",[],0,0,[]);

    pokemonService.getPokemon("pikachu").subscribe(res => {
      let pokemon:Pokemon = res;
      console.log(pokemon); 
      // pokemon = {
      //   id: res.id,
      //   sprites: res.sprites,
      //   name: res.name,
      //   types: res.types,
      //   height: res.height,
      //   weight: res.weight,
      //   stats: res.stats,
      // };
    });
  }
}
