import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/class/pokemon';
import { Sprites } from 'src/app/class/sprites';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() pokemon: Pokemon = new Pokemon(
    0,
    new Sprites('', '', '', '', '', '', '', ''),
    '',
    [],
    0,
    0,
    []
  );
}
