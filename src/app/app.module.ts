import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ClothsComponent } from './components/cloths/cloths.component';
import { FurnituresComponent } from './components/furnitures/furnitures.component';
import { SportsComponent } from './components/sports/sports.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ElectronicsComponent,
    ClothsComponent,
    FurnituresComponent,
    SportsComponent,
    NavbarComponent,
    SidebarComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
