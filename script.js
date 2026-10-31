/*Pseudo Code de l'achitecture
analyseDesResultats (){

    calculerMoyenne(){
    Calculer dans un tableau la moyenne de chaque étudiant
    retourner le tableau 
    }

    analyserMoyenne(){
    2-Se servie du tableau poue calculer la moyenne générale de tous les étudiant
    3-Classer le tableau des moyennes dans l'ordre decroissant 
    4-Se servir du tableau classé pour identifier la meilleure et la pire moyenne
    5-Calculer le nombres d'étudiant avec une moyenne >= 10 et le nombre d'étudiant avec une moyenne < 10
    6- Identifier les eleves avec une moyenne >= 15
    return {
    2,
    3,
    4,
    5,
    6,
    }
    }

analyserAge(){
1-Calculer l'age moyen des étudiants 
2- Identifier l'etudiant le plus agé et le moins agé 
return{
1,
2,}
}

analyserNote(){
1-Déterminé la note la plus élevé et la note la moins élevé parmis toute les notes 
return 1
}
                   -

}
*/


const lesResultats = [
  { nom: "Alice", age: 20, notes: [15, 12, 18, 14] },
  { nom: "Bob", age: 22, notes: [10, 8, 12, 9] },
  { nom: "David", age: 21, notes: [18, 17, 16, 19] },
  { nom: "Emma", age: 20, notes: [13, 15, 14, 16] },
  { nom: "Paul", age: 23, notes: [7, 11, 9, 10] }
];


const tableauDesMoyennes = (etudiants) =>{
const tableau = [];
etudiants.forEach(etudiant => {
  const somme = etudiant.notes.reduce((acc , note) => acc + note , 0);
  const moyenne = somme / etudiant.notes.length ;
  tableau.push({nom:etudiant.nom ,
                  moyenne
                });
});
return tableau
};

const analyserMoyennes = (tableauMoyennes) => {

const somme = tableauMoyennes.reduce((acc , etudiant) => acc + etudiant.moyenne , 0);
const moyenneGenerale = somme / tableauMoyennes.length;

const classerLesMoyennes = [...tableauMoyennes].sort((a ,b) => b.moyenne - a.moyenne);
const meilleureMoyenne = classerLesMoyennes[0];
const pireMoyenne = classerLesMoyennes[classerLesMoyennes.length - 1];

let moyennePlusDe10 = 0;
let moyenneMoinsDe10 = 0;
tableauMoyennes.forEach(etudiant => {etudiant.moyenne >= 10 ? moyennePlusDe10++ : moyenneMoinsDe10++ ;});

const lesMoyennesSuperieurA15 = tableauMoyennes.filter(etudiant => etudiant.moyenne >= 15);

return {
 moyenneGenerale,
 classerLesMoyennes,
 meilleureMoyenne,
  pireMoyenne,
  moyennePlusDe10,
  moyenneMoinsDe10,
  lesMoyennesSuperieurA15,
}
};

const analyserAge = (etudiants)=> {
  const somme = etudiants.reduce((acc , etudiant)=> acc + etudiant.age, 0);
  const ageMoyen = somme / etudiants.length;

  const ageClasser = [...etudiants].sort((a ,b) => b.age - a.age);
  const plusAgé = ageClasser[0];
  const moinsAgé = ageClasser[ageClasser.length - 1];

  return {
    ageMoyen,
    plusAgé,
    moinsAgé
  }
};

const analyserNote = (etudiants)=> {
let noteLaPlusElevé = null;
let noteLaMoinsElevé = null;
etudiants.forEach(etudiant => {
  etudiant.notes.forEach(note => {
    if (note > noteLaPlusElevé || noteLaPlusElevé === null  ) {
      noteLaPlusElevé = note ;
    };
    if ( note < noteLaMoinsElevé || noteLaMoinsElevé === null) {
      noteLaMoinsElevé = note
    }
  });
});
return{
 noteLaPlusElevé,
  noteLaMoinsElevé
}
}

function analyserResultats(lesEtudiants) {
  const moyenneDesEtudiants = tableauDesMoyennes(lesEtudiants);
  const analyseMoyenne = analyserMoyennes(moyenneDesEtudiants);
  const analyseAge = analyserAge(lesEtudiants);
  const analyseNote = analyserNote(lesEtudiants);

  return {
moyenneDesEtudiants,
 ClassementDesMoyennes:analyseMoyenne.classerLesMoyennes,
 LaMeilleureMoyenne : analyseMoyenne.meilleureMoyenne,
 LaPireMoyenne: analyseMoyenne.pireMoyenne, 
 MoyennePlusDe10: analyseMoyenne.moyennePlusDe10,
 MoyenneMoinsDe10: analyseMoyenne.moyenneMoinsDe10,
 LesMoyennesSuperieurA15: analyseMoyenne.lesMoyennesSuperieurA15,
 AgeMoyen:analyseAge.ageMoyen,
 LePusAgé:analyseAge.plusAgé,
 LeMoinsAgé:analyseAge.moinsAgé,
 NoteLaPlusElevé:analyseNote.noteLaPlusElevé, 
 NoteLaMoinsElevé:analyseNote.noteLaMoinsElevé
  }
}


console.log(analyserResultats(lesResultats));