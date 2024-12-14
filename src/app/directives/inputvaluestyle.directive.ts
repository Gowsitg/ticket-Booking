import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputvaluestyle]',
})
export class InputvaluestyleDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputValue: string = this.el.nativeElement.value;
    const firstTwoChars = inputValue.substring(0, 2); 
    const remainingChars = inputValue.substring(2); 

    // Update the input value
    this.el.nativeElement.value = `${firstTwoChars}${remainingChars}`;
  }
}
