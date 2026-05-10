import { Routes } from '@angular/router';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component'; 
import { Parte2Component } from './components/parte2/parte2.component'; 
import { HomeComponent } from './components/layout/home/home.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'punto1', component: Punto1Component },
    { path: 'punto2', component: Punto2Component },
    { path: 'punto3', component: Punto3Component },
    { path: 'parte2', component: Parte2Component },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},

];
