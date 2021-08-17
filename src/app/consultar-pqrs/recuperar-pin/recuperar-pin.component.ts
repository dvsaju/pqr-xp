import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, tap } from "rxjs/operators";
import { MensajeModal } from 'src/app/core/model/mensaje-modal';
import { Observable, of } from 'rxjs';
import { PinResponse } from 'src/app/core/model/pqr';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-recuperar-pin',
  templateUrl: './recuperar-pin.component.html',
  styleUrls: ['./recuperar-pin.component.scss']
})
export class RecuperarPinComponent implements OnInit {

  public formRecuperacion: FormGroup;
  public mensaje: MensajeModal = null;
  public pinGenerado: number = null;

  @Input() correo: string = null;
  @Input() telefono: string = null;
  @Output() pinSolicitado: EventEmitter<PinResponse> = new EventEmitter();

  constructor(private _user: UserService) {
    this.initialize();
  }

  ngOnInit(): void {
  }

  private initialize(): void {
    this.formRecuperacion = new FormGroup({
      medioRecuperacion: new FormControl('0', [Validators.required]),
      detalleMedio: new FormControl('', [Validators.required, Validators.email])
    })
  }

  public recuperarPin(event: Event): void {
    event.preventDefault();
    this._user.obtenerNuevoPin().pipe(
      tap(pin => this.pinAsignado(pin)),
      catchError(error => this.errorHandler(error))
    ).subscribe();
  }

  public cerrarModal(): void {
    this.mensaje = null;
    let response: PinResponse = { pin: this.pinGenerado }
    if (this.formRecuperacion.controls.medioRecuperacion.value == '0') {
      response.correo = this.formRecuperacion.get('detalleMedio').value;
    }
    if (this.formRecuperacion.controls.medioRecuperacion.value == '1') {
      response.celular = this.formRecuperacion.get('detalleMedio').value;
    }
    this.pinSolicitado.emit(response);
  }

  private pinAsignado(pin: number): void {
    this.pinGenerado = pin;
    this.mensaje = { icono: 'check_circle', texto: `Su nuevo pin fue enviado por el medio que solicitó (${this.pinGenerado}).` }
  }

  private errorHandler(error): Observable<any> {
    this.mensaje = { icono: 'report_problem', texto: `Hubo un error al generar el nuevo pin, por favor contacte al administrador.` }
    return of(null)
  }

  public inputType(): string {
    return this.formRecuperacion.controls.medioRecuperacion.value == '0' ? 'email' : 'tel'
  }

  public inputPlaceholder(): string {
    return this.formRecuperacion.controls.medioRecuperacion.value == '0' ? 'ej: andres_giraldo@email.com' : 'ej: 317 5698521'
  }

  public changeMedio(): void {
    if (this.formRecuperacion.controls.medioRecuperacion.value == '0') {
      this.formRecuperacion.controls.detalleMedio.setValidators([Validators.required, Validators.email])
    } else {
      this.formRecuperacion.controls.detalleMedio.setValidators([Validators.required, Validators.maxLength(10)])
    }
    this.formRecuperacion.controls.detalleMedio.reset();
  }



}
