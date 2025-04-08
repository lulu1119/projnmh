const pers = [ 
    {
    vards: "Jānis",
    uzvards: "Bērziņš",
    vecums: 20,
    epasts: "ejeyd@example.com"
    },
    {
    vards: "Pēteris",
    uzvards: "Liepiņš",
    vecums: 25,
    epasts: "ejeyd2@example.com"
    },
    {
    vards: "Andris",
    uzvards: "Ozols",
    vecums: 30,
    epasts: "oqibz@example.com"
    }
]

console.log(pers)



for (i=0; i < pers.length; i++){  // Izvadīt konsolē tikai vārdus
    console.log(pers[i].vards) 
}
    

let sum = 0; // Izvadīt konsolē visu vidējo vecumu
for (i=0; i < pers.length; i++){
    sum = sum + pers[i].vecums;
}
console.log(sum/pers.length);



const vecumi = [];
for (i=0; i < pers.length; i++){
    vecumi.push(pers[i])
}




//Ar programmas palīdzību pievienot masīvam vēl vienu objektu

pers.push({
    vards: "Juris",
    uzvards: "Bērziņš",
    vecums: 35,
    epasts: "oqibz@example.com"
});
console.log(pers);


//Izvadīt konsolē visu personu vārdus un uzvārdus
for (i=0; i < pers.length; i++){  
    console.log(pers[i].vards + " " + pers[i].uzvards);
}
   

//Izvadīt konsolē visu personu vārdus, uzvārdus un e-pastus
for (i=0; i < pers.length; i++){  
    console.log(pers[i].vards + " " + pers[i].uzvards + " " + pers[i].epasts);
}