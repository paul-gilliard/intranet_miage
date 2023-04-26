import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent {

  @Input() listeCours: any;

  promo! : String;
  semestre! : String;
  cours! : String;

  @ViewChild(NgbAccordion)
  accordion!: NgbAccordion;

  @Output() linkChange = new EventEmitter<String>();
  link!: String;

  onLinkChange(value: String) {
    this.link = value;
    this.linkChange.emit(this.link);
  }

  onClick(cours: String, semestre: String, promo: String) {
    if(cours == ''){
      if(semestre == ''){
        this.onLinkChange(promo);
      }else{
        this.onLinkChange(promo+' > '+semestre);
      }
    }else{
      this.onLinkChange(promo+' > '+semestre+' > '+cours);
    }
  }
}
