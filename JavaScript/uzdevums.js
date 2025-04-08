//const t = Number(prompt("Ievadi temperatūru"))
//if (t>37) {
    //alert("iespējams drudzis")
//}
//else if(t<35){
   // alert("nav par aukstu")
//}

//else{
    //alert("viss kārtībā")
//}




for(let x = 1; x <= 100; x++){
    if (x % 5 === 0 && x % 7 ===0){
        document.write("FizzBuzz"+";");
    }
    else if (x % 5 === 0){
        document.write("Fizz"+";");
    }

    else if (x % 7 === 0){
        document.write("Buzz"+";");
    }

    
    else{
    document.write(x+";");
    }
}