import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  pokemon: string = '';
  pokemonNombre: string | null = '';

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.pokemonNombre = route.snapshot.paramMap.get('nombre');

    if (this.pokemonNombre != null) {
      //Respuesta para obtener un solo pokemon
      this.pokemonService.getPokemon(this.pokemonNombre).subscribe((res) => {
        this.pokemones.push(res);
      });
    } else {
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

  searchPokeon(event: String) {
    if (event === '' || event === null || event === '0') {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['']).then(() => {
        this.router.navigate(['', event]);
      });
    }
  }
}
