import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { EntrainementRoutingModule } from './entrainement-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    EntrainementRoutingModule,
    FormsModule
  ],
  exports: [
    CreateUserComponent
  ]
})
export class EntrainementModule { }

