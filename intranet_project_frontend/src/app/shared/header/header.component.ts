import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

//import {} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logout() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUserName');
      localStorage.removeItem('currentUserEmail');
      localStorage.removeItem('currentUserPromo');
      localStorage.removeItem('currentUserStatut');
      this.router.navigate(['/home']);
      this.isAuthenticated = false;
    }
  }
  
}
