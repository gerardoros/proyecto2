import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnoList: AngularFireList<any>; //se crea una lista de firebase se llena en vacio

  selectedAlumno:Alumno = new Alumno(); // se inicializa el alumno seleccionado


  constructor(private firebase: AngularFireDatabase) {  }
  getAlumnos(){
    return this.alumnoList = this.firebase.list('alumnos'); //regresa la lista de alumnos  en Firebase
  }

  insertAlumno(alumno: Alumno){
    this.alumnoList.push(
      {
        nombre: alumno.nombre,
        ap: alumno.ap,
        carrera: alumno.carrera,
        semestre: alumno.semestre

      } );
  }
 
  updateAlumno(alumno: Alumno){
  this.alumnoList.update(alumno.$key,
    {
        nombre: alumno.nombre,
        ap: alumno.ap,
        carrera: alumno.carrera,
        semestre: alumno.semestre
    }
    );
  
  }

  deleteAlumno($key: string)
  {
    this.alumnoList.remove($key);
  }
}
