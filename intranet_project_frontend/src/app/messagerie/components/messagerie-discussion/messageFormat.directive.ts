import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MessagePrive } from 'src/app/models/messagePrivee.model'; // Importez la classe MessagePrive depuis votre application

@Directive({
  selector: '[appMessageFormat]'
})
export class MessageFormatDirective implements OnChanges {

  @Input('appMessageFormat') messages: MessagePrive[]=[];

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['messages'] && !changes['messages'].firstChange) {
      this.applyMessageFormat();
    }
  }

  private applyMessageFormat(): void {
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    this.messages.forEach(message => {
      const isCurrentUser = message.emeteur === currentUserEmail;
      const element = this.elementRef.nativeElement.querySelector(`#message-${message.id}`);
      if (element) {
        element.classList.toggle('message-moi-p', isCurrentUser);
        element.classList.toggle('message-autre-p', !isCurrentUser);
      }
    });
  }

}
