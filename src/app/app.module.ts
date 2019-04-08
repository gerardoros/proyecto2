import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase
import {  AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
//formularios
import { FormsModule} from '@angular/forms';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosListComponent } from './components/alumnos/alumnos-list/alumnos-list.component';
import { AlumnoComponent } from './components/alumnos/alumno/alumno.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SlayderComponent } from './components/slayder/slayder.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { GenerosComponent } from './components/generos/generos.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { OpinionListComponent } from './components/contacto/opinion-list/opinion-list.component';
import { OpinionComponent } from './components/contacto/opinion/opinion.component';
//services
import {OpinionService} from './services/opinion.service';
@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnosListComponent,
    AlumnoComponent,
    ContactoComponent,
    InicioComponent,
    SlayderComponent,
    DescripcionComponent,
    EjemplosComponent,
    GenerosComponent,
    ConocenosComponent,
    OpinionListComponent,
    OpinionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule    
  ],
  providers: [
    OpinionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
