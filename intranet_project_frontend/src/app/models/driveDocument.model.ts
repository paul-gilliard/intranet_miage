import { Buffer } from 'buffer';

export interface DriveDocument {
    etiquetteCours: String;
    etiquettePromo: String;
    semestre: String;
    mail: String;
    document: Buffer;
    nom_fichier: String;
    //dateCreation: Date;  
}