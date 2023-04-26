import { Request, Response } from 'express';

export const getCursusStructure = async (req: Request, res: Response) => {
      return res.status(200).json([
        {
          title: 'Licence 3', 
            semestres:[
              {
                title: 'Semestre 5',
                cours: [
                  'Stratégie des Organisations', 
                  'Comptabilité Financière',
                  'Finance',
                  'Comptabilité de Gestion',
                  'Anglais',
                  'Communication',
                  'Conception des SI',
                  'Algortithmique et Bases de Programmation',
                  'Probabilités et Statistiques pour l\'Informatique'
                ]
              },
              {
                title: 'Semestre 6',
                cours: [
                  'Prévisions Financières', 
                  'Droit des Sociétés',
                  'Anglais',
                  'SGBD',
                  'Utilisation Réseaux',
                  'POO',
                  'Stage'
                ]
              }
            ]
        },
        {
          title: 'Master 1', 
            semestres:[
              {
                title: 'Semestre 7',
                cours: [
                  'POO', 
                  'Recherche Op & Conduite de Projets',
                  'Marketing et Statistiques',
                  'SI Comptable et Financier',
                  'Anglais',
                  'Introduction aux ERP'
                ]
              },
              {
                title: 'Semestre 8',
                cours: [
                  'Contrôle de Gestion', 
                  'Web Services',
                  'Processus stochastiques et simulation',
                  'Anglais',
                  'Réseaux et Sécurité des SI',
                  'Gestion des RH',
                  'Management des SI',
                  'Projets TIC',
                  'Stage/Alternance en Entreprise'
                ]
              }
            ]
        },
        {
          title: 'Master 2', 
            semestres:[
              {
                title: 'Semestre 9',
                cours: [
                  'Marchés Financiers', 
                  'Initiation à la Recherche',
                  'Droit des Contrats Informatiques',
                  'Anglais',
                  'Analyse et audit des SI',
                  'E-Marketing et Commerce Electronique',
                  'Données et IA',
                  'Extraction de Connaissances et Applications des BD',
                  'Programmation d\'Application Mobiles'
                ]
              },
              {
                title: 'Semestre 10',
                cours: [
                  'Méthodes Agiles pour le Développement Logiciel', 
                  'Projet de Développement Logiciel',
                  'Stage/Alternance en Entreprise'
                ]
              }
            ]
        }
      ]);
  };
