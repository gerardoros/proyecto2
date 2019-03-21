import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
//formularios
import { FormsModule} from '@angular/forms';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosListComponent } from './components/alumnos/alumnos-list/alumnos-list.component';
import { AlumnoComponent } from './components/alumnos/alumno/alumno.component'

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnosListComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
