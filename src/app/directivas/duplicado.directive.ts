import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { InscripcionService } from '../services/parte2.services';

@Directive({
  selector: '[appUniqueValue]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: UniqueValueDirective,
    multi: true
  }]
})
export class UniqueValueDirective implements Validator {
  // Recibe 'dni' o 'email' para saber qué propiedad buscar
  @Input('appUniqueValue') fieldName: string = '';

  constructor(private service: InscripcionService) {}

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const lista = this.service.getInscripciones();
    
    // Buscamos si existe algún registro con ese valor en el campo especificado
    const exists = lista.some((item: any) => item[this.fieldName] === value);

    return exists ? { 'notUnique': true } : null;
  }
}