import { Component } from '@angular/core';
import { Modal } from "bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  createUser() {
    let element = document.getElementById("createUserModal") as HTMLElement;
    let myModal = new Modal(element);
    myModal.show();
  }

  login() {
    let element = document.getElementById("loginModal") as HTMLElement;
    let myModal = new Modal(element);
    myModal.show();
  }

}
