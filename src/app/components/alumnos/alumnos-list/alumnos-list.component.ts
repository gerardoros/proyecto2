import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  alumnoList: Alumno[];
  constructor(private alumnoService: AlumnoService) { 

  }

  ngOnInit() {
    this.alumnoService.getAlumnos().snapshotChanges().subscribe(item => {
      this.alumnoList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.alumnoList.push(x as Alumno);
      })
    });
  }
  onEdit(alumno: Alumno)
  {
    this.alumnoService.selectedAlumno = Object.assign({},alumno); //elimina el doble enlace de datos para evitar bajo rendimiento
  }
  onDelete($key: string)
  {
    this.alumnoService.deleteAlumno($key);
  }

}
