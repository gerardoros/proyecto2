import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import{ Opinion } from '../models/opinion';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
opinionList: AngularFireList<any>;

selectedOpinion:Opinion = new Opinion();

constructor(private firebase: AngularFireDatabase) { }
  getOpiniones()
  {
   return this.opinionList = this.firebase.list('opinion');
  }
  insertOpinion(opinion: Opinion)
  {
    this.opinionList.push(
  {
  nom: opinion.nom,
  ape: opinion.ape,
  pun: opinion.pun,
  opi: opinion.opi
} );
  }
  updateOpinion(opinion: Opinion)
  {
this.opinionList.update(opinion.$key,
  {
    nom: opinion.nom,
    ape: opinion.ape,
    pun: opinion.pun,
    opi: opinion.opi
});
  }
  deleteOpinion($key: string)
  {
 this.opinionList.remove($key);
  }
}
