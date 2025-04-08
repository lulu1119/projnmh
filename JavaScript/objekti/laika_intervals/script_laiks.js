let laiks = 10;

const bilde = "clock.png"
let i = document.getElementById("ievade").value
   
function poga(){
    clearInterval()
    i = document.getElementById("ievade").value 
    document.querySelector("img").setAttribute("src", "");
    laikaAtskaite()
}

function laikaAtskaite(){

    if(laiks >= 0 ){
        if(laiks>=10){
            document.querySelector("h2").innerHTML = "00:" + laiks
        }else{
            document.querySelector("h2").innerHTML = "00:0" + laiks
        }
      
    laiks = laiks - 1  
    //laiks = laiks--
    } else{
        document.querySelector("h2").innerHTML = "Laiks beidzies!"
        clearInterval(intervals)
        document.querySelector("img").style.display = "block"
    }
}
        

        
  let intervals =  setInterval(laikaAtskaite, 1000);