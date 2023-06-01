import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './component/search/search.component';
import { PokemonItemComponent } from './component/pokemon-item/pokemon-item.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: ':id', component: SearchComponent },
  { path: 'pokemon/:id', component: PokemonItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
