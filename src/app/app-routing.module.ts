import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ClothsComponent } from './components/cloths/cloths.component';
import { FurnituresComponent } from './components/furnitures/furnitures.component';
import { SportsComponent } from './components/sports/sports.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'electronics',component: ElectronicsComponent},
  {path :'cloths', component : ClothsComponent},
  {path:'furnitures',component:FurnituresComponent},
  {path:'sports',component:SportsComponent},
  {path:':type/:id',component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
