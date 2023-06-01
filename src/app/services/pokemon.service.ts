import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {

  }

  getPokemon(nombre:string){
    let url="https://pokeapi.co/api/v2";

    return this.http.get<any>(`${url}/pokemon/${nombre}`)
  }

  getPokemons(){
    let url="https://pokeapi.co/api/v2";

    return this.http.get<any>(`${url}pokemon?limit=8&offset=0`);
  }
}
