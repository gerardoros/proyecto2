import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Opinion } from '../models/opinion';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
opinionList: AngularFireList<any>;
selectedOpinion: Opinion = new Opinion();
  constructor(private firebase: AngularFireDatabase) { }
  getOpiniones()
  {
   return this.opinionList = this.firebase.list('opiniones');
  }
  insertOpinion(opinion: Opinion)
  {
this.opinionList.push({
  nombre: opinion.nombre,
  apellidos: opinion.apellidos,
  puntuacion: opinion.puntuacion,
  opinions: opinion.opinions
});
  }
  updateOpinion(opinion: Opinion)
  {
this.opinionList.update(opinion.$key,
  {
  nombre: opinion.nombre,
  apellidos: opinion.apellidos,
  puntuacion: opinion.puntuacion,
  opinions: opinion.opinions
});
  }
  deleteOpinion($key: string)
  {
 this.opinionList.remove($key);
  }
}
