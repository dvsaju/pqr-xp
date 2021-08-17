import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PQR } from 'src/app/core/model/pqr';

@Component({
  selector: 'app-listado-pqrs',
  templateUrl: './listado-pqrs.component.html',
  styleUrls: ['./listado-pqrs.component.scss']
})
export class ListadoPqrsComponent implements OnInit {

  @Input() listaPqrs: PQR[] = [];

  public pqrsMostrados: PQR[];
  public filtroPqr: FormControl;

  constructor(private _router: Router) {
    this.initialize();
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'listaPqrs': {
            this.pqrsMostrados = [...this.listaPqrs]
          }
        }
      }
    }
  }

  private initialize(): void {
    this.pqrsMostrados = [];
    this.filtroPqr = new FormControl('')
  }

  public cargarPqr(id: number) {
    this._router.navigate(['pqrs', id])
  }

  public filtrarPqr(event) {
    if (this.filtroPqr.value) {
      this.pqrsMostrados = this.listaPqrs.filter(pqr => pqr.descripcion.includes(this.filtroPqr.value))
    } else {
      this.pqrsMostrados = [...this.listaPqrs]
    }
  }

}
