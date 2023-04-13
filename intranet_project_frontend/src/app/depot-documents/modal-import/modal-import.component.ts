import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-import',
  templateUrl: './modal-import.component.html',
  styleUrls: ['./modal-import.component.css']
})
export class ModalImportComponent implements OnInit{

  @Input() listeCours: any;
  selectedFile!: File;
  isPromoChoose!: Boolean;
  isSemestreChoose!: Boolean;
  selectedPromo: any;
  selectedSemestre: any;
  listeSemestres: any;
  listeNomCours: any;

  importDocumentForm = this.formBuilder.group({
    name: [, [Validators.required, ]],
    file: [, [Validators.required, ]],
    promo: [, [Validators.required, ]],
    semestre: [, [Validators.required, ]],
    cours: [, [Validators.required, ]]
  });

  constructor(private formBuilder: FormBuilder){ }

  ngOnInit(): void {
    this.isPromoChoose = false;
    this.isSemestreChoose = false;
  }

  importDocument() {

  }

  onPromoSelected(selectedValue: any) {
    this.selectedPromo = this.listeCours.find((promo: { title: any; }) => promo.title === selectedValue.value);
    this.isPromoChoose = true;
    this.listeSemestres = this.selectedPromo.semestres;
  }

  onSemestreSelected(selectedValue: any) {
    this.selectedSemestre = this.selectedPromo.semestres.find((semestre: { title: any; }) => semestre.title === selectedValue.value);
    this.isSemestreChoose = true;
    this.listeNomCours = this.selectedSemestre.cours;
  }

  close() {
    this.importDocumentForm.reset();
  }
}
