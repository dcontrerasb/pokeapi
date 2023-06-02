import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/class/pokemon';
import { Sprites } from 'src/app/class/sprites';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() pokemon: Pokemon = new Pokemon(
    0,
    new Sprites('', '', '', '', '', '', '', ''),
    '',
    [],
    0,
    0,
    []
  );

  ngOnInit(): void {
    console.log(this.pokemon.types[0].type.name);
  }
}
