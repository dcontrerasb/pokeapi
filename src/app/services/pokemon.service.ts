import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../class/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(nombre: string) {
    let url = 'https://pokeapi.co/api/v2';

    return this.http.get<Pokemon>(`${url}/pokemon/${nombre}`);
  }

  getPokemons() {
    let url = 'https://pokeapi.co/api/v2';

    return this.http.get<any>(`${url}/pokemon?limit=12&offset=0`);
  }
}
