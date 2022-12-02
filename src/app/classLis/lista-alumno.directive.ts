import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appListaAlumno]'
})
export class ListaAlumnoDirective {

  constructor() { }
   private elemento: ElementRef
   private renderer:  Renderer2
}
