# analyser les Resultat
## La moyenne de chaque étudiant
- Creer une memoire tableau 
- Parcourire le tableau etudiants
- Pour chaque étudiant :
             a-Parcourir le tableau notes
                    -Faire la somme des notes 
                    -Diviser la somme paar le nombre de note dans le tableau notes
             b- creer un objet qui contient le nom et la moyenne de l'éleve 
             c- Ajouter l'objet au tableau memoire
- Retourner le tableau memoire (Tableau des moyennes)

## La moyenne generale de tous les eleves
- Recuperer le tableau des moyennes
- Parcourir le tableau 
- Faire la somme des moyennes 
- Diviser la sommme par le nombre de moyenne dans le tableau 
- retourner le resultat

## Classer les étudiants de la meilleur moyenne a la mauvaise moyenne
- Faire une copie du le tableau moyennes 
- classer le tableau en fonction des moyennes dans l'ordre decroissant
- retourner le tableau classer

## Identifier l'etudiant ayant la meilleur moyenne et celui ayant la plus mauvaise moyenne 
- Recuperer le tableau des moyenne classer 
- Pour la meilleur moyenne retourner le premier element du tableau
- Pour la plus mauvaise moyenne retourner le dernier element du tableau

## Calculer le nombre d'etudiant ayant une moyenne >= 10 et le nombre ayant une moyenne < 10 
- Recuperer le tableau des moyennes 
- Initialiser deux compteurs nombreSuperieur10 et nombreInferieur10 
- Parcourir le tableau 
- pour chaque éleve si la moyenne >= 10 :
                                      nombreSuperieur10 ++
                            sinon : nombreInferieur10 ++
- Retourner :
            nombreSuperieur10 
            nombreInferieur10 

## Identifier les etudiant ayant une moyenne >= 15
- Recuperer le tableau  des moyennes 
- Filtrer le tableau pour obtenir les mmoyennes  >= 15 
- Retourner le nouveau tableau filtrer 

## Calculer l'age moyen des étudiants 
- Parcourie le tableau initiale 
- Faire la somme de l'age de tout les etudiant
- Diviser la somme par le nombre d'etudiant
- retourner le resultat

## Identifier l'etudiant le plus agé et le moins agé 
- Faire une copie du tableau initiale 
- classer le tableau dans l'ordre decroissant en fonction de l'age;
- Pour l'etudiant le plus agé retourner le premier élément du tableau classer 
- Pour l'etudiant le moins agé retourner le dernier élément du tableau classer 

## Déterminé la note la plus élevé et la note la moins élevé parmis toute les notes 

### Methode 1
- Initialiser deux references plusElevé et plusBasse 
- Parcourir le tableau initial 
- Pour chaque éleve classer les notes dans l'ordre decroissant 
- verifier si le premier  element des notes classé > a  plusElevé  :  plusElevé = le premier element du tableau 
- verifier si le dernier  element des notes classé < a  plusBasse  :  plusBasse  = le dernier element du tableau 
- retourner :
plusElevé
plusBasse

### Methode 2
- Initialiser deux references notePlusElevé et notePlusBasse 
- Parcourir le tableau initial 
- Pour chaque etudiant :
          a-Parcourie notes :
                           - si la note superieur a notePlusElevé:
                           notePlusElevé = la note parcouru;
                           - si la note inferieur a notePlusBasse : 
                           notePlusBasse = la note 

- retourner :
notePlusElevé
notePlusBasse 