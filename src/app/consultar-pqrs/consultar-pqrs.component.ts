import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PQR } from '../core/model/pqr';
import { PqrsService } from '../core/services/pqrs.service';

@Component({
  selector: 'app-consultar-pqrs',
  templateUrl: './consultar-pqrs.component.html'
})
export class ConsultarPqrsComponent implements OnInit {

  public listaPqrs: PQR[];

  constructor(private _pqrs: PqrsService) {
    this.initialize();
  }

  ngOnInit(): void {
    this._pqrs.obtenerListadoPqrs().pipe(
      tap(response => this.listaPqrs = response)
    ).subscribe();
  }

  initialize() {
    this.listaPqrs = [];
  }

}
