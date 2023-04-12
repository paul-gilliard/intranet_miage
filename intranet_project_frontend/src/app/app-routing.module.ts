import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagerieComponent } from './messagerie/components/messagerie/messagerie.component';
import { HomeConnectComponent } from './core/components/home-connect/home-connect.component';
import { AuthGuard } from './guards/auth.guard';
import { OffreComponent } from './offres/components/offre/offre.component';
import { SondageComponent } from './sondages/components/sondage/sondage.component';
import { DocumentComponent } from './depot-documents/document/document.component';

const routes: Routes = [
  { path: '', component: HomeConnectComponent },
  { path: 'home',  component: HomeConnectComponent, canActivate: [AuthGuard] },
  { path: 'messagerie', component: MessagerieComponent, canActivate: [AuthGuard] },
  { path: 'offre', component: OffreComponent, canActivate: [AuthGuard] },
  { path: 'sondage', component: SondageComponent, canActivate: [AuthGuard] },
  { path: 'documents', component: DocumentComponent, canActivate: [AuthGuard] },
  { path: 'emploiDuTemps', component: DocumentComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }