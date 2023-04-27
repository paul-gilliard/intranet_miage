import { Component } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { DocumentService } from 'src/app/services/document.service';
import { MessagerieService } from 'src/app/services/messagerie.service';

@Component({
  selector: 'app-home-connect',
  templateUrl: './home-connect.component.html',
  styleUrls: ['./home-connect.component.css']
})

export class HomeConnectComponent {
  
  listOfFunctionnality = ["Message", "offres", ""];
  selectedIndex = 0;
  nbMessages!: number;
  nbOffres!: number;
  nbSondages!: number;
  nbDocuments!: number;
  nbCours!: number;
  promo!: string;

  constructor(private messagerieService: MessagerieService,
              private documentsService: DocumentService, 
              private calendarService : CalendarService) {}

  ngOnInit(): void {

    this.nbOffres = 0;
    this.nbSondages = 0;
    this.promo=localStorage.getItem("currentUserPromo")!;

    this.messagerieService.getNumberOfMessages().subscribe((data:any) => {
      this.nbMessages = data?.numberOfMessages;
    });
    this.documentsService.getNumberOfDocuments().subscribe((data:any)=> {
      this.nbDocuments = data?.numberOfDocuments;
    });
    this.calendarService.getNumberOfEventToday(this.promo).subscribe((data:any)=> {
      this.nbCours = data;
    });
  }
}