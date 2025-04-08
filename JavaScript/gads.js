const  gads = Number(prompt("Ievadiet gadu: "));
let diena = 0;

if (gads % 400 == 0){
    diena = 366
    console.log(`${gads} ir garais gads, un tajā ir ${diena} dienas`)
}

else if (gads % 100 == 0){
    diena = 365
    console.log(`${gads} nav garais gads, un tajā ir ${diena} dienas`)
}

else if (gads % 4 == 0){
    diena = 366
    console.log(`${gads} ir garais gads, un tajā ir ${diena} dienas`)
}

else {
    diena = 365
    console.log(`${gads} nav garais gads, un tajā ir ${diena} dienas`)
}