import { Request, Response } from 'express';
import CursusStructure from '../models/cursus-structure.model';

export const getCursusStructure = async (req: Request, res: Response) => {
      return res.status(200).json({
        "title": "MIAGE",
        "annees": [
          {
            "nom": "L3",
            "semestres": [
              {
                "libelle": "Semestre 5",
                "cours": [
                  {
                    "code": "Cours 1",
                    "intitule": "Cours 1"
                  },
                  {
                    "code": "Cours 2",
                    "intitule": "Cours 2"
                  }
                ]
              },
              {
                "libelle": "Semestre 6",
                "cours": [
                  {
                    "code": "Cours 1",
                    "intitule": "Cours 1"
                  },
                  {
                    "code": "Cours 2",
                    "intitule": "Cours 2"
                  }
                ]
              }
            ]
          },
          {
            "nom": "M1",
            "semestres": [
              {
                "libelle": "Semestre 7",
                "cours": [
                  {
                    "code": "Cours 1",
                    "intitule": "Cours 1"
                  },
                  {
                    "code": "Cours 2",
                    "intitule": "Cours 2"
                  }
                ]
              },
              {
                "libelle": "Semestre 8",
                "cours": [
                  {
                    "code": "Cours 1",
                    "intitule": "Cours 1"
                  },
                  {
                    "code": "Cours 2",
                    "intitule": "Cours 2"
                  }
                ]
              }
            ]
          },
          {
            "nom": "M2",
            "semestres": [
              {
                "libelle": "Semestre 9",
                "cours": [
                  {
                    "code": "Cours 1",
                    "intitule": "Cours 1"
                  },
                  {
                    "code": "Cours 2",
                    "intitule": "Cours 2"
                  }
                ]
              },
              {
                "libelle": "Semestre 10",
                "cours": [
                  {
                    "code": "Cours 1",
                    "intitule": "Cours 1"
                  },
                  {
                    "code": "Cours 2",
                    "intitule": "Cours 2"
                  }
                ]
              }
            ]
          }
        ]
      }
      );
  };
