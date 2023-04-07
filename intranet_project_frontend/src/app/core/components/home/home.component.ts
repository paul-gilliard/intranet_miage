import { Component, OnDestroy, OnInit } from '@angular/core';
import { Modal } from "bootstrap";
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
authenticated: boolean = false;

constructor(private authService: AuthService) {
  
}

ngOnInit(): void {
    this.authenticated = this.authService.isAuthenticated();
}


}
