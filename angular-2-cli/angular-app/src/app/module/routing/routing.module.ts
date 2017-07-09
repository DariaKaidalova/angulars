import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ExercisesBlocksComponent } from '../../exercises-blocks/exercises-blocks.component';
import { ExercisesDetailsComponent } from '../../exercises-details/exercises-details.component';
import { TypesBlocksComponent } from '../../types-blocks/types-blocks.component';
import { ExercisesAddingComponent } from '../../exercises-adding/exercises-adding.component';

const mainRoutes: Routes = [
  { path: 'exercises',  component:  ExercisesBlocksComponent},
  { path: 'exercise/:id',  component:  ExercisesDetailsComponent},
  { path: 'types', component:  TypesBlocksComponent},
  { path: 'adding', component:  ExercisesAddingComponent},
  { path: '', redirectTo: '/exercises', pathMatch: 'full'},
  { path: '**', component: ExercisesBlocksComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
