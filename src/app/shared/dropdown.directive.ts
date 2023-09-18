import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  //Max solution

  //Class is just an html attribute. Can bind to this using hostbinding and set it as a property.
  // By binding to a property we can change it here and the changes will be reflected in the html.
  //Here we have bound to the actual class we are interested in. Angular searches for it and
  // returns fal
  @HostBinding('class.open') isOpen = false;

  //Listen to click event. Toggle isOpen property to opposite value.
  // As the property is bound to class.open, setting this to true will add the class.
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  //My solution
  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // @HostListener('click') onClick() {
  //   //Get classes
  //   const hasOpen = this.elRef.nativeElement.classList.contains('open');
  //   if (hasOpen) {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   } else {
  //     this.renderer.addClass(this.elRef.nativeElement, 'open');
  //   }
  // }
}
