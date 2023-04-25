import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent {

  @Input() listeCours: any;

  @Output() link = new EventEmitter<String>();
  @Output() promo = new EventEmitter<String>();
  @Output() semestre = new EventEmitter<String>();
  @Output() cours = new EventEmitter<String>();

  @ViewChild(NgbAccordion)
  accordion!: NgbAccordion;

  onClick(cours: String, semestre: String, promo: String) {
    if(cours == ''){
      if(semestre == ''){
        this.link.emit(promo);
      }else{
        this.link.emit(promo+' > '+semestre);
      }
    }else{
      this.link.emit(promo+' > '+semestre+' > '+cours);
    }
    this.promo.emit(promo);
    this.semestre.emit(semestre);
    this.cours.emit(cours);
  }
}
