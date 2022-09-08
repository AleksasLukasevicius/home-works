const car = prompt("Koks Jusu auto?");
switch (car) {
    case "BMW":
    case "Mini":
    case "Rolls-Royce":
        console.info("Priklauso BMW");
        break;
    case "VW":
    case "Audi":
    case "Audi":
    case "Bugatti":
    case "Lamborghini":
    case "Porsche":
        console.info("Priklauso VW");
        break;
    default:
        console.info("Niekam nePriklauso");
        break;
}