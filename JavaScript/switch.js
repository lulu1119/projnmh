
const nedelasDiena = Number(prompt("Ievadi skaitli no 1 līdz 7: "))


switch (nedelasDiena) {
    case 1:
        izvade = "Pirmdiena";
        break;
    case 2:
        izvade = "Otrdiena";
        break;
    case 3:
        izvade = "Trešdiena";
        break;
    case 4:
        izvade = "Ceturtdiena";
        break;
    case 5:
        izvade = "Piektdiena";
        break;
    case 6:
        izvade = "Sestdiena";
        break;
    case 7:
        izvade = "Svētdiena";
        break;
default:
        izvade = "Kļūdaini norādīta nedēļas diena";
}


console.log(izvade)
