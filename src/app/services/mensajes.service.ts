import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  mensajeError(titulo: string, mensaje: string)
  {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'error'
    })
  }
  mensajeCorrecto(titulo: string, mensaje: string)
  {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'success'
    })
  }
  mensajeAdvertencia(titulo: string, mensaje: string)
  {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'warning'
    })
  }
  mensajeBorrar()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You can't undone these changes",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete.'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted',
          'The user has been deleted',
          'success'
        )
      }
    })
  }
}
