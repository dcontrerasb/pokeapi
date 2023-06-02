import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/class/pokemon';
import { Sprites } from 'src/app/class/sprites';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  pokemones: Pokemon[] = [];
  pokemon: string = "";
  pokemonNombre:string | null = "";

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
    this.pokemonNombre=route.snapshot.paramMap.get('nombre');

    if(this.pokemonNombre != null){
      //Respuesta para obtener un solo pokemon
      this.pokemonService.getPokemon(this.pokemonNombre).subscribe((res) => {
        this.pokemones.push(res);
      });
    }
    else{
      //Respuesta para obtener varios pokemon
      this.pokemonService.getPokemons().subscribe((res) => {
        res.results.forEach((pokemon: Pokemon) => {
          pokemonService.getPokemon(pokemon.name).subscribe((res) => {
            this.pokemones.push(res);
          });
        });
      });
    }
  }
}
