import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const currentUrl = window.location.href;
    const linkUrl = this.el.nativeElement.firstChild.href;

    if (currentUrl === linkUrl) {
    
      this.el.nativeElement.classList.add('active');
      this.el.nativeElement.firstChild.style.backgroundColor = 'white';
      this.el.nativeElement.firstChild.style.borderRadius = '20px 20px 20px 20px';
      this.el.nativeElement.firstChild.style.borderBottom='2px solid black';
      this.el.nativeElement.firstChild.style.height= '30px'
      
    }
  }
}