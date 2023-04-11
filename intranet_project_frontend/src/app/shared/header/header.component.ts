import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  currentUserName: string = "";

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (localStorage.getItem('currentUserName') != undefined){
      this.currentUserName = localStorage.getItem('currentUserName')!;
    }
    
  }

  logout() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUserName');
      localStorage.removeItem('currentUserEmail');
      localStorage.removeItem('currentUserPromo');
      localStorage.removeItem('currentUserStatut');
      this.isAuthenticated = false;
    }
  }
}
