
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { VerificadorComponent } from './verificador/verificador.component';
import { PlanificadorComponent } from './planificador/planificador.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MconsejosComponent } from './mconsejos/mconsejos.component';

const routes: Routes = [

  {path: 'Bienvenida', component: BienvenidaComponent},
  {path: 'Verificador', component: VerificadorComponent},
  {path: 'Planificador', component: PlanificadorComponent},
  {path: 'Contenido', component: ContenidoComponent},
  {path: 'Mconsejos', component: MconsejosComponent},
  {path: '', component: BienvenidaComponent , pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    VerificadorComponent,
    PlanificadorComponent,
    ContenidoComponent,
    MconsejosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
