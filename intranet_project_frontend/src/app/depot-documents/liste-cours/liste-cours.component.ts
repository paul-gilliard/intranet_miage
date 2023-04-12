import { Component } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css'],
  providers: [NgbAccordionConfig]
})
export class ListeCoursComponent {

  listeCours: any = [
    {
      title: 'License 3', 
        semestres:[
          {
            title: 'Semestre 5',
            cours: [
              'Cours 1', 
              'Cours 2'
            ]
          },
          {
            title: 'Semestre 6'
          }
        ]
    },
    {
      title: 'Master 1', 
        semestres:[
          {
            title: 'Semestre 7',
            cours: [
              'Cours 1', 
              'Cours 2'
            ]
          },
          {
            title: 'Semestre 8'
          }
        ]
    },
    {
      title: 'Master 2', 
        semestres:[
          {
            title: 'Semestre 9',
            cours: [
              'Cours 1', 
              'Cours 2'
            ]
          },
          {
            title: 'Semestre 10'
          }
        ]
    }
  ];

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
  }
}
