import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent {

  @Input() listeCours: any;

  promo! : string;
  semestre! : string;
  cours! : string;
  isShow : boolean = false;
  isShowCours : boolean = false;

  @ViewChild(NgbAccordion)
  accordion!: NgbAccordion;

  @Output() linkChange = new EventEmitter<string>();
  link!: string;

  onLinkChange(value: string) {
    this.link = value;
    this.linkChange.emit(this.link);
  }

  onClick(cours: string, semestre: string, promo: string) {
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

  onClickPromo(cours: string, semestre: string, promo: string) {
    this.onClick(cours, semestre, promo);
    this.isShow = !this.isShow;
    this.isShowCours = false;
  }

  onClickSemestre(cours: string, semestre: string, promo: string) {
    this.onClick(cours, semestre, promo);
    this.isShowCours = !this.isShowCours;
  }
}