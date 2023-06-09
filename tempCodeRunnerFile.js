// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('intranet-miage');

// Create a new document in the collection.
db.getCollection('CURSUS_STRUCTURE').insertOne({
    
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
      
      
});
