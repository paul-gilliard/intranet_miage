import { Buffer } from 'buffer';

export interface DriveDocument {
    etiquetteCours: String;
    etiquettePromo: String;
    semestre: String;
    mail: String;
    document: Buffer;
    nom: String;
    dateCreation: Date;  
}