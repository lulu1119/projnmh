function poga() {
    const ievadesLogaVertiba = document.getElementById("ievade").value;
    const izvadesId = document.getElementById("izvade")

    

    //if (izvelesId.checked){
    //izvadesId.innerHTML = `Rezultāts ir ${ievadesLogaVertiba*3}!`;


    if (veids.checked) {
    izvadesId.innerHTML = `Rezultāts ir ${ievadesLogaVertiba*3}!`;
    } else {
    izvadesId.innerHTML = `Rezultāts ir ${ievadesLogaVertiba}!`
    }
}

function poga2(){
    const izvadesId2= document.getElementById("klastuve");

    if (klase10a.checked){
        izvadesId2.innerHTML = `Sveicināti 10.a klasē!` 
    }else if (klase10b.checked){
        izvadesId2.innerHTML = `Sveicināti 10.b klasē!` 
    }else if (klase11a.checked){
        izvadesId2.innerHTML = `Sveicināti 11.a klasē!` 
    }else if (klase11b.checked){
        izvadesId2.innerHTML = `Sveicināti 11.b klasē!` 
    }else if (klase12a.checked){
        izvadesId2.innerHTML = `Sveicināti 12.a klasē!` 
    
    }else if (klase12b.checked) {
        izvadesId2.innerHTML = `Sveicināti 12.b klasē!` 
    }

}

    