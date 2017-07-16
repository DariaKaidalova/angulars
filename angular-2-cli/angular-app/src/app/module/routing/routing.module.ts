import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TypesBlocksComponent } from '../../types-blocks/types-blocks.component';
import { ExercisesBlocksComponent } from '../../exercises-blocks/exercises-blocks.component';
import { ExercisesDetailsComponent } from '../../exercises-details/exercises-details.component';
import { ExercisesAddingComponent } from '../../exercises-adding/exercises-adding.component';
import { ExercisesEditingComponent } from '../../exercises-editing/exercises-editing.component';


const mainRoutes: Routes = [
  { path: 'types', component:  TypesBlocksComponent},
  { path: 'exercises',  component:  ExercisesBlocksComponent},
  { path: 'exercise/add', component:  ExercisesAddingComponent},
  { path: 'exercise/update/:id',  component:  ExercisesEditingComponent},
  { path: 'exercise/review/:id',  component:  ExercisesDetailsComponent},
  
  
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
