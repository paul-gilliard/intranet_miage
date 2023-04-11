import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagerieComponent } from './messagerie/components/messagerie/messagerie.component';
import { HomeConnectComponent } from './core/components/home-connect/home-connect.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './core/components/home/home.component';


const isLoggedIn= localStorage.getItem('token');

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'homeConnected', component: HomeConnectComponent, canActivate: [AuthGuard] },
  { path: 'messagerie', component: MessagerieComponent, canActivate: [AuthGuard] }
  // { path: 'offres', component: OffresComponent },
  // { path: 'sondages', component: SondagesComponent },
  // { path: 'documents', component: DocumentsComponent },
  // { path: 'emploidutemps', component: EmploiDuTempsComponent }
  // Ajoutez ici vos autres routes protégées par le guard d'authentification
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
