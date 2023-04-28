import { Schema, model } from 'mongoose';

export interface Cours {
  code: string;
  intitule: string;
}

export interface Semestre {
  libelle: string;
  cours: Cours[];
}

export interface Annee {
  nom: string;
  semestres: Semestre[];
}

export interface CursusStructure {
  title: string;
  annees: Annee[];
}

const coursSchema = new Schema<Cours>(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    intitule: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const semestreSchema = new Schema<Semestre>(
  {
    libelle:{
      type: String,
      required: true,
      trim: true
    },

    cours: {
      type: [coursSchema],
      required: true,
      validate: {
        validator: function (cours: Cours[]) {
          return cours.length > 0;
        },
        message: 'There must be at least one cours in the semestre.',
      },
    },
  },
  {
    timestamps: true,
  }
);

const anneeSchema = new Schema<Annee>(
  {
    nom:{
      type: String,
      required: true,
      trim: true
    },

    semestres: {
      type: [semestreSchema],
      required: true,
      validate: {
        validator: function (semestres: Semestre[]) {
          return semestres.length > 0;
        },
        message: 'There must be at least one semestre in the annee.',
      },
    },
  },
  {
    timestamps: true,
  }
);

const cursusStructureSchema = new Schema<CursusStructure>(
  {
    title:{
      type: String,
      required: true,
      trim: true
    },

    annees: {
      type: [anneeSchema],
      required: true,
      validate: {
        validator: function (annees: Annee[]) {
          return annees.length > 0;
        },
        message: 'There must be at least one annee in the cursus.',
      },
    },
  },
  {
    timestamps: true,
  }
);

export default model<CursusStructure>('CursusStructureSchema', cursusStructureSchema);