import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagerieComponent } from './messagerie/components/messagerie/messagerie.component';
import { HomeConnectComponent } from './core/components/home-connect/home-connect.component';
import { AuthGuard } from './guards/auth.guard';
import { OffreComponent } from './offres/components/offre/offre.component';
import { SondageComponent } from './sondages/components/sondage/sondage.component';

const isLoggedIn= localStorage.getItem('token');

const routes: Routes = [
  { path: '', component: HomeConnectComponent },
  { path: 'home',  component: HomeConnectComponent, canActivate: [AuthGuard] },
  { path: 'messagerie', component: MessagerieComponent, canActivate: [AuthGuard] },
  { path: 'offre', component: OffreComponent, canActivate: [AuthGuard] },
  { path: 'sondage', component: SondageComponent,canActivate: [AuthGuard] }
  // { path: 'documents', component: DocumentsComponent },
  // { path: 'emploidutemps', component: EmploiDuTempsComponent }
  // Ajoutez ici vos autres routes protégées par le guard d'authentification
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
