import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { PinResponse } from 'src/app/core/model/pqr';
import { UserService } from 'src/app/core/services/user.service';
import { loginValidator } from "src/app/shared/validators/login-validator";

@Component({
  selector: 'app-login-pqrs',
  templateUrl: './login-pqrs.component.html',
  styleUrls: ['./login-pqrs.component.scss']
})
export class LoginPqrsComponent implements OnInit {

  public loginForm: FormGroup;
  public showPinRecovery: boolean;
  public mostrarErrorLogin: boolean;

  constructor(private _user: UserService, private _router: Router) {
    this.initialize();
  }

  ngOnInit(): void {
  }

  public showPinRecoveryDialog() {
    this.showPinRecovery = true;
  }

  private initialize() {
    this.loginForm = new FormGroup({
      correo: new FormControl('', Validators.email),
      celular: new FormControl('', Validators.maxLength(10)),
      pin: new FormControl('', Validators.required)
    }, { validators: loginValidator });
    this.showPinRecovery = false;
    this.mostrarErrorLogin = false;
  }

  public cerrarModal(nuevoPin: PinResponse) {
    this.loginForm.get('pin').setValue(nuevoPin.pin);
    if (nuevoPin.celular) { this.loginForm.get('celular').setValue(nuevoPin.celular) }
    if (nuevoPin.correo) { this.loginForm.get('correo').setValue(nuevoPin.correo) }
    this.showPinRecovery = false;
  }

  public onKeyDownPin(event) {
    const pattern = /[0-9]/;
    let inputChar = event.key;
    if (inputChar != 'Backspace' && (!pattern.test(inputChar) || String(this.loginForm.get('pin').value).length === 4)) {
      event.preventDefault();
    }
  }

  public iniciarSesion(event: Event) {
    console.log(this.loginForm.value)
    this._user.login(this.loginForm.value).pipe(
      tap(response => {
        if (response) {
          this._router.navigate(['pqrs'])
          this.mostrarErrorLogin = false;
        } else {
          this.mostrarErrorLogin = true;
        }
      })
    ).subscribe();
  }

}
