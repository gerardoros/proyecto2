import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import {InicioComponent } from './components/inicio/inicio.component';
import {GenerosComponent} from './components/generos/generos.component';
import {ConocenosComponent} from './components/conocenos/conocenos.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'generos', component: GenerosComponent},
  { path:'conocenos', component: ConocenosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
