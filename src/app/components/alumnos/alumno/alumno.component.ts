import { Component, OnInit } from '@angular/core';
import{ AlumnoService } from '../../../services/alumno.service';
import{NgForm} from '@angular/forms'
import { Alumno } from 'src/app/models/alumno';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnoService.getAlumnos();
    this.resetForm();
  }
  onSubmit(alumnoForm: NgForm) 
  {
    if(alumnoForm.value.$key == null)
    this.alumnoService.insertAlumno(alumnoForm.value);
    else 
    this.alumnoService.updateAlumno(alumnoForm.value);
    
    this.resetForm(alumnoForm);
  }
  resetForm(alumnoForm?: NgForm)
  {
    if(alumnoForm != null)
    {
      alumnoForm.reset();
      this.alumnoService.selectedAlumno = new Alumno();
    }
  }

}
