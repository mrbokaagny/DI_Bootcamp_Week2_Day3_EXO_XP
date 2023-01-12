
// Notre Object de base

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// affichage du nombre d'étages du bâtiment.

console.log(building['numberOfFloors']);

// nbre appartement eu premier et deuxième étages
const nbrePrmEtage = building['numberOfAptByFloor']['firstFloor'];
const nbreTrsEtage = building['numberOfAptByFloor']['thirdFloor'];
console.log(`Au premier étape on a ${nbrePrmEtage} appartements`)
console.log(`Au deuxième étape on a ${nbreTrsEtage} appartements`)

// Question 4
const deuxLocataire = building.nameOfTenants[1];
const secondTenantRooms = building.numberOfRoomsAndRent[deuxLocataire.toLowerCase()][0];
console.log(`${deuxLocataire} a ${secondTenantRooms} chambres dans leur appartement.`)

// Question 5
const sarah = building['numberOfRoomsAndRent']['sarah'][1];
const david = building['numberOfRoomsAndRent']['david'][1];
const dan = building['numberOfRoomsAndRent']['dan'][1];
if (sarah + david > dan) {
    let varToShwo = building['numberOfRoomsAndRent']['dan'][1] = 1200
    console.log(`le loyer de dan est à ${varToShwo} maintenant`)
}

