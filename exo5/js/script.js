const myFamily = {
    mother: "Sophie",
    father: "Boka",
    children: ["Junior", "Bedel"],
    address: "Cocody Faya, Rue 450",
    phoneNumber: "0102030405"
}

console.log("--------- Affichage des clés du tableau ---------")

for (let k in myFamily){
    console.log(k) 
}

console.log('-------- Affichages des valeurs du tableau ------')
for(let k in myFamily){
    console.log(myFamily[k]) // les valeurs
}
