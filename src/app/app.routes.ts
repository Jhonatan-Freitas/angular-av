import { Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import {ExperienciasComponent } from './experiencias/experiencias.component';
import {HomeComponent } from './home/home.component';
export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'habilidades', component: HabilidadesComponent},
    {path: 'experiencias', component: ExperienciasComponent}
];