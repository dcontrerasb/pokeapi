import { Component } from '@angular/core';
import { Pokemon } from 'src/app/class/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private pokemonService: PokemonService){
    let pokemon: Pokemon= new Pokemon(0,"","",[],0,0,[]);

    pokemonService.getPokemon("pikachu").subscribe(res => {
      pokemon = {
        id: res.id,
        imagen: res.sprites.front_default,
        nombre: res.name,
        habilidades: res.types,
        altura: res.height,
        anchura: res.weight,
        stats: res.stats,
      };
      console.log(pokemon);
    });
  }
}
