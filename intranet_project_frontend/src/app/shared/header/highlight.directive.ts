import { Directive, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  
  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        const linkUrl = this.el.nativeElement.firstChild.href;
        console.log("Current "+currentUrl);
        console.log("Link "+linkUrl);


        if ( linkUrl.includes(currentUrl)) {
          console.log("parfait égale");
          this.el.nativeElement.classList.add('active');
          this.el.nativeElement.firstChild.style.backgroundColor = 'white';
          this.el.nativeElement.firstChild.style.borderRadius = '20px 20px 20px 20px';
          this.el.nativeElement.firstChild.style.borderBottom='2px solid black';
          this.el.nativeElement.firstChild.style.height = '50px;';
        } else {
          this.el.nativeElement.classList.remove('active');
          this.el.nativeElement.firstChild.style.backgroundColor = '';
          this.el.nativeElement.firstChild.style.borderRadius = '';
          this.el.nativeElement.firstChild.style.borderBottom='';
          this.el.nativeElement.firstChild.style.height = '';
          
        }
      }
    });
  }
  ngOnDestroy() {
    this.el.nativeElement.classList.remove('active');
    this.el.nativeElement.firstChild.style.backgroundColor = '';
    this.el.nativeElement.firstChild.style.borderRadius = '';
    this.el.nativeElement.firstChild.style.borderBottom='';
    this.el.nativeElement.firstChild.style.height = '';
  }
}
