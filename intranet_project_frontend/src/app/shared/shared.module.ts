import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './header/highlight.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
