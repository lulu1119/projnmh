const persona = {
    firstName: "Alise",
    lastName: "Liepa",
    age: 2024-2003,
    occupation: 'studente',
    friends: ["Oskars", 'Anna', 'Aivars', 'Zane']
}
//šim objektam ir 5 rekvizīti (property) un 5 vērtības
console.log(persona.firstName)
console.log(persona["firstName"])

const vards = "Name"
console.log(persona["first"] + vards)



const atbilde = prompt("Ko tu vēlies zināt par šo personu? (firstName, lastName, age, uccupation, friends)")
console.log(persona[atbilde])
//console.log(persona.atbilde) //-nedarbojas ja nav tāda rekvizīta, ko pieprasa, tad rāda undefined


if(persona[atbilde]){
    console.log(persona[atbilde]) //pārbauda vai ==true
} else{
    console.log("Nepareizs pieprasījums! Izvēlies no: firstNmae, lastName, age, occupation, friends") 
}

//pievieno jaunus elementus
persona.pilseta = "Salaspils"
persona["valsts"] = "Latvija"
console.log(persona)


console.log(`${persona.firstName} ir ${persona.occupation} un viņai ir ${persona.friends.length} draugi. Labāko draugu sauc ${persona.friends[0]}.`)


console.log()