import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[currentUserMessage]'
})
export class CurrentUserMessageDirective implements OnChanges {
  @Input('currentUserMessage') emetteur: string='';

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.updateStyle();
  }

  private updateStyle() {
    if (this.isCurrentUserMessage()) {
      this.el.nativeElement.classList.add('message-moi-p');
      this.el.nativeElement.classList.remove('message-autre-p');
    } else {
      this.el.nativeElement.classList.add('message-autre-p');
      this.el.nativeElement.classList.remove('message-moi-p');
    }
  }

  private isCurrentUserMessage() {
    return this.emetteur === localStorage.getItem('currentUserEmail');
  }
}