import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { DetallePQR } from 'src/app/core/model/pqr';
import { PqrsService } from 'src/app/core/services/pqrs.service';

@Component({
  selector: 'app-detalle-pqrs',
  templateUrl: './detalle-pqrs.component.html',
  styleUrls: ['./detalle-pqrs.component.scss']
})
export class DetallePqrsComponent implements OnInit {

  private idPqr: string;
  public pqr: DetallePQR;

  constructor(private _pqr: PqrsService, private _route: ActivatedRoute) {
    this.initialize();
  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      tap(params => { this.idPqr = params.get('id'), console.log(params) }),
      switchMap(params => this._pqr.obtenerPqrPorId(this.idPqr)),
      tap(pqr => this.pqr = pqr)
    ).subscribe();
  }

  initialize() {
    this.idPqr = null;
    this.pqr = null;
  }

}
