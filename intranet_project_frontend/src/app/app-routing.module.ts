import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagerieComponent } from './messagerie/components/messagerie/messagerie.component';
import { BodyOfHomeComponent } from './core/components/body-of-home/body-of-home.component';
import { HomeConnectComponent } from './core/components/home-connect/home-connect.component';
import { AuthGuard } from './guards/auth.guard';
import { OffresModule } from './offres/offres.module';
import { OffreComponent } from './offres/components/offre/offre.component';
import { SondagesModule } from './sondages/sondages.module';
import { SondageComponent } from './sondages/components/sondage/sondage.component';

const isLoggedIn= localStorage.getItem('token');

const routes: Routes = [
  { path: 'home', component: BodyOfHomeComponent },
  { path: 'homeConnected', component: HomeConnectComponent, canActivate: [AuthGuard] },
  { path: 'messagerie', component: MessagerieComponent, canActivate: [AuthGuard] },
  { path: 'offre', component: OffreComponent, canActivate: [AuthGuard] },
  {path: 'sondage', component: SondageComponent,canActivate: [AuthGuard] }
  // { path: 'offres', component: OffresComponent },
  // { path: 'sondages', component: SondagesComponent },
  // { path: 'documents', component: DocumentsComponent }
  // RAJOUTER LIEN VERS EMPLOI DU TEMPS
  // Ajoutez ici vos autres routes protégées par le guard d'authentification
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
