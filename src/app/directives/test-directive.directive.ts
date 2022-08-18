import { Directive, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  @Input() 
  set unformatted(value: any) {
    console.log('unformatted updated');
    const updated = this.format(value);
    this.element.nativeElement.value = updated;
    // this.formatted.emit(updated);
  } 
  // I don't need this
  // @Output() formatted: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) { }

  public format(value: any) {
    return "$" + parseFloat(value);
  }

  public setToRaw(value: string) {
    return value.replace("$", "");
  }

  @HostListener('blur')
  onblour() {
    this.element.nativeElement.value = this.format(this.element.nativeElement.value);
  }

  @HostListener('focus')
  onfocus() {
    this.element.nativeElement.value = this.setToRaw(this.element.nativeElement.value);
  }
}
