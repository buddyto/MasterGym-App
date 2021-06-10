import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listado-inscripcion',
  templateUrl: './listado-inscripcion.component.html',
  styleUrls: ['./listado-inscripcion.component.scss']
})
export class ListadoInscripcionComponent implements OnInit {
  inscripciones: any[] = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.inscripciones.length = 0;
    this.loadSubs();
  }
  loadSubs(){
    this.db.collection('inscripciones').get().subscribe((resultado)=>{
      
      resultado.forEach((inscripcion)=>{
        
        let inscripcionObtenida = inscripcion.data();
        inscripcionObtenida.id = inscripcion.id
        this.db.doc(inscripcion.data().cliente.path).get().subscribe((cliente)=>{
          
          inscripcionObtenida.clienteObtenido = cliente.data();
          inscripcionObtenida.fecha = new Date(inscripcionObtenida.fecha.seconds * 1000)
          inscripcionObtenida.fechaFinal = new Date(inscripcionObtenida.fechaFinal.seconds * 1000)
          this.inscripciones.push(inscripcionObtenida)
        })
      })
    })
  }
  borrarSub(inscripcion){
    //console.log(inscripcion);
    this.db.collection('inscripciones').doc(inscripcion.id).delete();
    this.inscripciones.length = 0;
    this.loadSubs();
  }

}
