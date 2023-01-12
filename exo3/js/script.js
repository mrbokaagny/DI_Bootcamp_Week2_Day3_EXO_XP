let current_number = prompt("Donner un nombre svp")

console.log(typeof(current_number));

//Tant que le nombre est inférieur à 10, on lance la boucle
    

while (parseInt(current_number) < 10) {
    current_number = prompt('Veuillez entrer un numéro supérieur à 10 : ');
}
