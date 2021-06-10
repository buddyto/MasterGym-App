import { DocumentReference } from '@angular/fire/firestore/interfaces';

export class Inscripcion{
    fecha: Date;
    fechaFinal: Date;
    precios: DocumentReference;
    cliente: DocumentReference;
    subTotal: number;
    iva: number;
    total: number;
    constructor(){
        this.fecha = null
        this.fechaFinal = null
        this.precios = this.precios
        this.cliente = this.cliente
        this.subTotal = this.subTotal
        this.iva = this.iva
        this.total = this.total
     }
     validar(): any{
         let respuesta = {
             esValido: false,
             mensaje: ''
         }
         if(this.cliente == null || this.cliente == undefined)
         {
             respuesta.esValido = false;
             respuesta.mensaje = 'Please select a client'
             return respuesta;
         }
         if(this.precios == null || this.precios == undefined)
         {
             respuesta.esValido = false;
             respuesta.mensaje = 'No sub selected'
             return respuesta;
         }
         if(this.fecha == null || this.fecha == undefined)
         {
             respuesta.esValido = false;
             respuesta.mensaje = 'No start date'
             return respuesta;
         }
         
         if(this.fechaFinal == null || this.fechaFinal == undefined)
         {
             respuesta.esValido = false;
             respuesta.mensaje = 'No end date'
             return respuesta;
         }
         
         if(this.subTotal <= 0 || this.subTotal == undefined)
         {
             respuesta.esValido = false;
             respuesta.mensaje = 'Subtotal error'
             return respuesta;
         }
         if(this.iva <= 0 || this.iva == undefined)
         {
             respuesta.esValido = false;
             respuesta.mensaje = 'Tax error'
             return respuesta;
         }
         if(this.total <= 0 || this.total == undefined)
         {
             respuesta.esValido = false;
             respuesta.mensaje = 'Total error'
             return respuesta;
         }
         respuesta.esValido = true;
         return respuesta
     }
}