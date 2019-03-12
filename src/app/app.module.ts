import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HabilidadesComponent,
    ExperienciasComponent,
    NavbarComponent,
    HomeComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
