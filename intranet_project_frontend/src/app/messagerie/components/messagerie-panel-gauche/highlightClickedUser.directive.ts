import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    // sélectionne tous les éléments de la liste et retire la classe 'listUserSelect'
    const allItems = document.querySelectorAll('.listUserSelect');
    for (let i = 0; i < allItems.length; i++) {
      this.renderer.removeClass(allItems[i], 'listUserSelect');
    }

    // ajoute la classe 'listUserSelect' à l'élément cliqué
    this.renderer.addClass(this.el.nativeElement, 'listUserSelect');
  }
}