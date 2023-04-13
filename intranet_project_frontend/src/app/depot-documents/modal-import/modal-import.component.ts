import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DriveDocument } from 'src/app/models/driveDocument.model';
import { DocumentService } from 'src/app/services/document.service';

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

  constructor(private formBuilder: FormBuilder,
              private service: DocumentService){ }

  ngOnInit(): void {
    this.isPromoChoose = false;
    this.isSemestreChoose = false;
  }

  importDocument() {
    let importDocument: DriveDocument = {
      nom: this.importDocumentForm.get('name')?.value!,
      etiquettePromo: this.importDocumentForm.get('promo')?.value!,
      etiquetteCours: this.importDocumentForm.get('cours')?.value!,
      semestre: this.importDocumentForm.get('semestre')?.value!,
      mail: localStorage.getItem('email')?.valueOf.toString()!,
      document: this.importDocumentForm.get('file')?.value!,
      dateCreation: new Date()
    }
    this.service.insertDocument(importDocument).subscribe(
      (response) => {
        if (response) {
          confirm('Fichier importé !')
        }
      },
      (error) => {
        console.error('Erreur d\'importation', error); 
      });
      this.close();
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
