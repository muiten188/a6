import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appCdatepicker]'
})
export class CdatepickerDirective {

  

  constructor( private renderer : Renderer2, 
               private element : ElementRef ) {
                debugger;
  }
  
  onChange;
  @HostListener('input', [ '$event.target.value' ])
  input( value ) {
    debugger;
    this.onChange(value.split(',').filter(Boolean));
  }
  writeValue( value : any ) : void {
    
    const element = this.element.nativeElement;
    this.renderer.setProperty(element, 'value', value.join(','));
  }

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

}
