import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[upDown]'
})
export class UpDownDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener("click")
  toggleData() {
    const nested = this.elementRef.nativeElement.parentElement?.querySelector(".nested")
    if ( this.elementRef.nativeElement.classList.contains("caret-down")) {
      this.elementRef.nativeElement.classList.remove("caret-down");
    } else {
      //this.renderer.addClass(nested, "active")
      this.renderer.addClass(this.elementRef.nativeElement, "caret-down");
    }

  }


}
