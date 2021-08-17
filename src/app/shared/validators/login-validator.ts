import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const loginValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const correo = control.get('correo');
    const celular = control.get('celular');

    return (!correo.value && !celular.value) ? { noMedium: true } : null;
};