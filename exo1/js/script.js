let people = ["Greg", "Mary", "Devon", "James"];


// Partie I

console.log('-------- notre tableau de base ----------------')
console.log(people)

// supprimons Grey
people.shift()

console.log('----------- après suppression du premier elemenet du tableau on a ------------')
console.log(people)

// remplaçons James par Jason
for (let key = 0; key < people.length; key++) {
    if (people[key] === 'James') {
        people[key] = 'Jason';
    }
}
console.log('----------- après remplacement de James par Jason ---------------')
console.log(people)


// ajouter d'un nom à la fin du tableau
console.log('----- après ajout à la fin du tableau -------')
people.push('mr_banks')
console.log(people)

// trouvons l'index de Mary
let indexMary = people.indexOf("Mary")
console.log(`L'index de Mary est ${indexMary}`)

// faire une copie du tableau
console.log('-------------- copy du tableau ------------------')
let copyOfPeople = people.slice(1,3)
console.log(copyOfPeople)

const indexOfFoo = people.indexOf('Foo');

console.log(`la valeur de l'index est ${indexOfFoo} , car cet element n'existe pas dans ce tableau`); 



// Partie II

// affichons le nom de chaque personne 
console.log('------------------- affichage du nom de chaque personne ------------')
for(let i = 0; i < people.length; i++) {
    console.log(people[i]);
}


// on quitte la boucle lorqu'on trouve Jason
console.log('--------- On quitte la boucle quand on trouve Jason -----')
for (const person of people) {
    if (person === 'Jason') {
        console.log(person)
    break;
    }
}


