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

    //Respuesta para obtener un solo pokemon
    pokemonService.getPokemon("pikachu").subscribe(res => {
      pokemon = res;
    });

    //Respuesta para obtener varios pokemon
    //Si eso lo que se puede hacer es poner un rango de 8 para obtener pokemon randoms
    pokemonService.getPokemons().subscribe(res =>{
      console.log(res);
      res.results.forEach((pokemon:any) => {
        pokemonService.getPokemon(pokemon.name).subscribe(res => {
          let pokemon:Pokemon = res;
          console.log(pokemon);
        });
      });
    });
  }
}
