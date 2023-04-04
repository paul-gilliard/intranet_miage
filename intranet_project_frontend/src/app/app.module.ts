import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/components/home/home.component';
import { CoreModule } from './core/core.module';
import { DepotDocumentsModule } from './depot-documents/depot-documents.module';
import { EmploiDuTempsModule } from './emploi-du-temps/emploi-du-temps.module';
import { MessagerieModule } from './messagerie/messagerie.module';
import { SharedModule } from './shared/shared.module';
import { SondagesModule } from './sondages/sondages.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MessagerieModule,
    EmploiDuTempsModule,
    DepotDocumentsModule,
    SondagesModule,
    
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
