import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'add',component:AddMusicComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
