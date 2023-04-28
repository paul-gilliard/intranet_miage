import { Component, ElementRef, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-modal-import',
  templateUrl: './modal-import.component.html',
  styleUrls: ['./modal-import.component.css']
})
export class ModalImportComponent implements OnInit{

  @Input() listeCours: any;
  @Output() isImport = new EventEmitter<boolean>();
  isPromoChoose!: boolean;
  isSemestreChoose!: boolean;
  selectedPromo: any;
  selectedSemestre: any;
  listeSemestres: any;
  listeNomCours: any;
  driveDocument!: File;
  selectedFile!: File;
  @ViewChild('fileInput', {static: false}) fileInput!: ElementRef;

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
    this.isImport.emit(false);
  }

  importDocument() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('name', this.importDocumentForm.get('name')?.value!);
    formData.append('promo', this.importDocumentForm.get('promo')?.value!);
    formData.append('semestre', this.importDocumentForm.get('semestre')?.value!);
    formData.append('cours', this.importDocumentForm.get('cours')?.value!);
    //TODO : mailOwner undefined en BDD
    formData.append('mailOwner', this.importDocumentForm.get('email')?.value!);

    this.service.insertDocument(formData).subscribe(
      (response) => {
        if (response) {
          confirm('Fichier importé !')
        }
      },
      (error) => {
        console.error("Erreur d'importation", error); 
      }
    );
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

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  
  close() {
    this.isPromoChoose = false;
    this.isSemestreChoose = false;
    this.importDocumentForm.reset();
    this.isImport.emit(true);
  }
}