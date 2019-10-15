import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import our custom display component
import {DisplayComponent} from './display/display.component';


const routes: Routes = [
  //If someone goes to ourApp/display (localhost:4200/display) render the DisplayComponent
  {path: 'display', component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
