
// création du tableau


console.log('-------------- Tableau --------------------------')
const colors = ["blanc", "noir", "blue", "orange", "gris"]
console.log(colors)

// bouclons sur la tableau

console.log('------------ Bouclons sur le tableau ---------------------')
for (let i = 0; i < colors.length; i++) {
    console.log(`Mon choix n°${i + 1} est ${colors[i]}`);
}


//bonus

console.log('------------- Boucle sur le bonus ------------------------')

const suffixes = ['er', 'ème', 'ème', 'ème','ème'];

for (let i = 0; i < colors.length; i++) {
    console.log(`Mon ${i + 1}${suffixes[i]} choix est ${colors[i]}`);
}
