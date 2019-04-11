import { Component, OnInit } from '@angular/core';
import {OpinionService} from '../../../services/opinion.service';
import { Opinion } from 'src/app/models/opinion';

@Component({
  selector: 'app-opinion-list',
  templateUrl: './opinion-list.component.html',
  styleUrls: ['./opinion-list.component.css']
})
export class OpinionListComponent implements OnInit {
opinionList: Opinion[];
  constructor(private opinionService: OpinionService) { }

  ngOnInit() {
    this.opinionService.getOpiniones()
    .snapshotChanges()
    .subscribe(item =>{
      this.opinionList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"]= element.key;
        this.opinionList.push(x as Opinion);
      });
    });
  }
onEdit(opinion: Opinion){
this.opinionService.selectedOpinion = Object.assign({}, opinion);
}

onDelete($key: string){
this.opinionService.deleteOpinion($key);

}

}
