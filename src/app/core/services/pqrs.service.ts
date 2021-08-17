import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DetallePQR, PQR } from '../model/pqr';
import listaPqrs from "src/app/core/mocks/pqrs";
import detallepqrs from "src/app/core/mocks/detallepqrs";
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  constructor() { }

  public obtenerListadoPqrs(): Observable<Array<PQR>> {
    return of(listaPqrs);
  }

  public obtenerPqrPorId(id: string): Observable<DetallePQR> {
    let idpqr = parseInt(id);
    let pqr = detallepqrs.find(detalle => detalle.id == idpqr);
    console.log("DETALLE", idpqr)
    return of(pqr)
  }

}
