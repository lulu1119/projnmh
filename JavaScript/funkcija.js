"use strict"

//funkciju deklarācijas
function izdruka() {
    console.log("Šodien ir piektdiena")
}
izdruka()
izdruka()


function suluSpiede(aboluSkaits, apelsinuSkaits){
    console.log(aboluSkaits, apelsinuSkaits)
    const sula = `Sula no ${aboluSkaits} āboliem un ${apelsinuSkaits} apelsīniem.`
    return sula
}
const aboluSula = suluSpiede(6, 0)
console.log(aboluSula)


const aboluApelsinuSula = suluSpiede(5, 6)
console.log(aboluApelsinuSula)



//otrais piemērs


function perimetrs(pirmaMala, otraMala, tresaMala){
    let perim
    if (pirmaMala+otraMala> tresaMala && pirmaMala+tresaMala>otraMala && otraMala+tresaMala>pirmaMala){
        perim = pirmaMala + otraMala + tresaMala
    } else {
        perim = "Tas nav trijstūris"
    }
    return perim
}
const perimetrs1 = perimetrs(5, 6, 7)
console.log(`Perimetrs trijstūrim ir ${perimetrs1}.`)







//funkciju izteiksmes (function expressions)

function vecums(dzimsanasGads) {
    return 2024 - dzimsanasGads
}
const vecums1 = vecums(2000)
console.log(vecums1)


//izteiksme jeb anonīmā funkcija
const vecums2 = function(dzimsanasGads){
    return 2024 - dzimsanasGads
}
console.log(vecums2(2000))




//3*
const perimetrs2 = function(mala1, mala2, mala3){
    return mala1+mala2+mala3
}
console.log(perimetrs2(5,6,7))
    


//bultu funkcijas (arrow function)
const vecums3 = dzimsanasGads => 2024 - dzimsanasGads
const pilniGadi = vecums3(2000)
console.log(pilniGadi)

//cik gadi paliek līdz pensijai

const lidzPensijai = dzimsanasGads => 65 - (2024 - dzimsanasGads)
console.log(lidzPensijai(2007))



//divi parametri
const gadiLidzPensijai = (dzimsanasGads, vards) => {
    const pilniGadi = 2024 - dzimsanasGads
    const pensija = 65 - pilniGadi
    return `${vards} dosies pensijā pēc ${pensija} gadiem.`
}
console.log(gadiLidzPensijai(2001, "Alise"))