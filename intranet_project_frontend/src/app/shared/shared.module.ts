import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './header/highlight.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
