//const tagad = new Date();



//document.getElementById("garais").innerHTML = tagad;


//document.getElementById("isais").innerHTML = tagad.getDate() + "." + (tagad.getMonth()+1) + "." + tagad.getFullYear() + ".";


//document.getElementById("isais").innerHTML = `${tagad.getDate()}.${(tagad.getMonth()+1)}.${tagad.getFullYear()}.`



function laiks() {
    const d1 = new Date(ievade.value);
    const d2 = new Date();
    const vecums = Math.abs(d1 - d2)/(1000*60*60*24);
    izvade.innerHTML = Math.floor(vecums);
   }