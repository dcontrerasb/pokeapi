import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../class/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {

  }

  getPokemon(nombre:string){
    let url="https://pokeapi.co/api/v2";
    let pokemon= new Pokemon(0,"","",[],0,0,[])

    console.log(this.http.get<any>(`${url}/pokemon/${nombre}`).subscribe(res => {
      console.log(res);
      let statsPokemon: string[] = []

      res.stats.forEach((stats:any) => {
        statsPokemon.push(stats.stat.name +" : "+stats.base_stat);
      });

      pokemon = {
        id: res.id,
        imagen: res.sprites.front_default,
        nombre: res.name,
        habilidades: [],
        altura: res.height,
        anchura: res.weight,
        stats: statsPokemon,
      };
      console.log(pokemon)
    }));
  }
}
