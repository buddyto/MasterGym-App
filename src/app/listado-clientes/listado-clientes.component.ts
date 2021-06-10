import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajesService } from '../services/mensajes.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {
  clientes: any[] = new Array<any>();
  constructor(private db: AngularFirestore, private msj: MensajesService) { }

  ngOnInit(): void {
    // this.db.collection('clientes').valueChanges().subscribe((resultado)=>{
    //   this.clientes = resultado;
    //   console.log(resultado)
    // })
    this.clientes.length = 0;
    this.db.collection('clientes').get().subscribe((resultado)=>{
      //console.log(resultado.docs)
      for(let item of resultado.docs)
      {
        // console.log(item.id)
        // console.log(item.data())
        // console.log(item.ref)
        let cliente = item.data();
        cliente.id = item.id;
        cliente.ref = item.ref
        this.clientes.push(cliente)
      }
    })
  }
  borrar(itemKey)
  {
    this.db.collection('clientes').doc(itemKey).delete().then((termino)=>{
      this.msj.mensajeCorrecto('Eliminado', 'Se ha eliminado el usuario correctamente')
    })
    this.mostrarClientes()
  }
  mostrarClientes()
  {
    this.db.collection('clientes').get().subscribe((resultado)=>{
      this.clientes.length = 0;
      resultado.docs.forEach((dato)=>{
        let cliente = dato.data() as Cliente;
        cliente.id = dato.id;
        cliente.ref = dato.ref;
        this.clientes.push(cliente)
      })
    })
  }

}
