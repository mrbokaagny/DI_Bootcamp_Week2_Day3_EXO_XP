/** Exercise 7 : Secret Group */

//1. Un groupe d'amis a décidé de créer une société secrète. Le nom de la société sera la première lettre de chacun de leurs noms triés par ordre alphabétique.
    //a. Indice : une chaîne est un tableau de lettres

    const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

    // Trier les noms par ordre alphabétique
    const isSorted = names.sort();
    
    // Extraire la première lettre de chaque nom
    const initials = isSorted.map(name => name[0]);
    
    // concatenation les initiales
    const nameToShow = initials.join('');
    
    // affichage du nom de la société secrète
    console.log(nameToShow);