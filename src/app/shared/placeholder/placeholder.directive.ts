import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]',
})
export class PlaceholderDirective {
  //VCR gives you access to the ref to a pointer at the place where
  //this directive is then used. Allows you to get info about the place you used the directive
  constructor(public viewContainerRef: ViewContainerRef) {}
}
