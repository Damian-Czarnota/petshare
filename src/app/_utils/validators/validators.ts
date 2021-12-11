import { AbstractControl } from '@angular/forms';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

export function matchPassword(AC: AbstractControl) {
    const password = AC.get('password').value;
    const confirmPassword = AC.get('passwordConfirm').value;
    if (password && confirmPassword) {
        if (password !== confirmPassword) {
            AC.get('passwordConfirm').setErrors({matchPassword: true});
        } else {
            AC.get('passwordConfirm').setErrors(null);
            return null;
        }
    }
}

export function rightPatternPassword(AC: AbstractControl) {
    const password = AC.get('password').value;
    const confirmPassword = AC.get('passwordConfirm').value;
    if (password) {
        if (!password.match('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')) {
            AC.get('password').setErrors({reqExpPassword: true});
        }
    }
    if (confirmPassword) {
        if (!confirmPassword.match('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')) {
            AC.get('passwordConfirm').setErrors({reqExpPassword: true});
        }
    }
}

export function autocompleteValidation(AC: AbstractControl) {
    const control = AC.value;
    if (!control || control && typeof control === 'object') {
        if (control) {
            AC.setValue(control.option);
        }
        return null;
    } else {
        return {autocomplete: true};
    }
}

export function validateAllFormFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl || (control instanceof FormArray && !(control.controls.length > 0))) {
            control.markAsTouched({onlySelf: true});
            control.updateValueAndValidity({onlySelf: true});

        } else if ((control instanceof FormGroup) || (control instanceof FormArray)) {
            validateAllFormFields(control);
        }
    });
}
