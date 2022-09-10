const userInput = prompt("Koks produktas?");
switch (userInput) {
    case "agrastas":
    case "agurkas":
    case "aronija":
    case "avitė":
    case "braškė":
    case "obuolys":
        console.info("Priklauso vaisiams");
        break;
    case "bulvė":
    case "brokolis":
    case "morka":
    case "rabarbaras":
    case "kopūsta":
    case "reikas":
        console.info("Priklauso daržovėms");
        break;
    default:
        console.info("Niekam nepriklauso");
        break;
}