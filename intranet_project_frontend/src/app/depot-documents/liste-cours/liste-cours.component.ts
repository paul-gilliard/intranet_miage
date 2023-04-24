import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

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

  @ViewChild(NgbAccordion)
  accordion!: NgbAccordion;

  onClickPromo(promo: String) {
    this.promo.emit(promo);
    this.accordion.expandAll();
  }

  onClickSemestre(semestre: String) {
    this.semestre.emit(semestre);
  }

  onClickCours(cours: String) {
    console.log("COUCOU");
    this.cours.emit(cours);
  }
}
