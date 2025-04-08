function press(){
    const naudaLogaVertiba= document.getElementById("nauda").value;
    const kalkuletId= document.getElementById("kalkuet")


    if (EUR.checked){
        kalkulet.innerHTML = `Summa ir ${naudaLogaVertiba*1.03}!`;
    }else if (USD.checked){
        kalkulet.innerHTML = `Summa ir ${naudaLogaVertiba/1.03}!` ;
    }

}

    