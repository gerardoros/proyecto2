import { Component, OnInit } from '@angular/core';
import {OpinionService} from '../../../services/opinion.service';
import { NgForm } from '@angular/forms'
import{Opinion} from '../../../models/opinion';
@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  constructor(private opinionService: OpinionService) { }
  ngOnInit() {
    this.opinionService.getOpiniones();
    this.resetForm();
  }
  onSubmit(opinionForm: NgForm)
  {
    if(opinionForm.value.$key == null)
    this.opinionService.insertOpinion(opinionForm.value);
    else 
    this.opinionService.updateOpinion(opinionForm.value);
    
    this.resetForm(opinionForm);
  }
resetForm(opinionForm?: NgForm)
{
  if(opinionForm != null)
  opinionForm.reset();
  this.opinionService.selectedOpinion = new Opinion();
}
}
