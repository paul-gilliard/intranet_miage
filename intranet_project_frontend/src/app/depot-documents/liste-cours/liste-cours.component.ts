import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent {

  @Input() listeCours: any;

  @Output() promo = new EventEmitter<String>();
  @Output() semestre = new EventEmitter<String>();
  @Output() cours = new EventEmitter<String>();

  // listeCours = [
  //   {
  //     title: 'License 3', 
  //       semestres:[
  //         {
  //           title: 'Semestre 5',
  //           cours: [
  //             'Cours 1', 
  //             'Cours 2'
  //           ]
  //         },
  //         {
  //           title: 'Semestre 6'
  //         }
  //       ]
  //   },
  //   {
  //     title: 'Master 1', 
  //       semestres:[
  //         {
  //           title: 'Semestre 7',
  //           cours: [
  //             'Cours 1', 
  //             'Cours 2'
  //           ]
  //         },
  //         {
  //           title: 'Semestre 8'
  //         }
  //       ]
  //   },
  //   {
  //     title: 'Master 2', 
  //       semestres:[
  //         {
  //           title: 'Semestre 9',
  //           cours: [
  //             'Cours 1', 
  //             'Cours 2'
  //           ]
  //         },
  //         {
  //           title: 'Semestre 10'
  //         }
  //       ]
  //   }
  // ];

  onClickPromo(promo: String) {
    console.log("COUCOU");
    this.promo.emit(promo);
  }

  onClickSemestre(semestre: String) {
    this.semestre.emit(semestre);
  }

  onClickCours(cours: String) {
    console.log("COUCOU");    
    this.cours.emit(cours);
  }
}
