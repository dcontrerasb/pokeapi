import { Component } from '@angular/core';
import { Pokemon } from 'src/app/class/pokemon';
import { Sprites } from 'src/app/class/sprites';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  pokemon: Pokemon;
  pokemones: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {
    this.pokemon = new Pokemon(
      0,
      new Sprites('', '', '', '', '', '', '', ''),
      '',
      [],
      0,
      0,
      []
    );

    //Respuesta para obtener un solo pokemon
    this.pokemonService.getPokemon('pikachu').subscribe((res) => {
      this.pokemon = res;
    });

    //Respuesta para obtener varios pokemon
    //Si eso lo que se puede hacer es poner un rango de 8 para obtener pokemon randoms
    this.pokemonService.getPokemons().subscribe((res) => {
      res.results.forEach((pokemon: Pokemon) => {
        pokemonService.getPokemon(pokemon.name).subscribe((res) => {
          this.pokemones.push(res);
        });
      });
    });
  }
}
