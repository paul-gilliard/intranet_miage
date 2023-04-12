import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/components/home/home.component';
import { CoreModule } from './core/core.module';
import { DepotDocumentsModule } from './depot-documents/depot-documents.module';
import { EmploiDuTempsModule } from './emploi-du-temps/emploi-du-temps.module';
import { MessagerieModule } from './messagerie/messagerie.module';
import { SharedModule } from './shared/shared.module';
import { SondagesModule } from './sondages/sondages.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgImageSliderModule } from 'ng-image-slider';

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
    FullCalendarModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  exports:[NgImageSliderModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
