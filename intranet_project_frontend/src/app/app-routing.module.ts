import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagerieComponent } from './messagerie/components/messagerie/messagerie.component';
import { HomeConnectComponent } from './core/components/home-connect/home-connect.component';
import { AuthGuard } from './guards/auth.guard';
import { OffreComponent } from './offres/components/offre/offre.component';
import { SondageComponent } from './sondages/components/sondage/sondage.component';
import { DriveDocumentComponent } from './depot-documents/drive-document/drive-document.component';
import { CalendarComponent }  from './emploi-du-temps/calendar/calendar.component';

const routes: Routes = [
  { path: '', component: HomeConnectComponent },
  { path: 'home',  component: HomeConnectComponent, canActivate: [AuthGuard] },
  { path: 'messagerie', component: MessagerieComponent, canActivate: [AuthGuard] },
  { path: 'offre', component: OffreComponent, canActivate: [AuthGuard] },
  { path: 'sondage', component: SondageComponent, canActivate: [AuthGuard] },
  { path: 'documents', component: DriveDocumentComponent, canActivate: [AuthGuard] },
  { path: 'emploiDuTemps', component: CalendarComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }