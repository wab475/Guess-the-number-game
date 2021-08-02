


var naam = prompt("Welkom! Wat is je naam?");
const guessNumber = Math.floor(Math.random() * 10);

alert("Hey " + naam)


for (poging = 1; poging < 6; poging++) {

  var number = prompt("voer een nummer is van 0 tot 25 om te beginnen met raden...")

  if (number == guessNumber) {
    alert("Gefeliciteerd je hebt gewonnen!")
    break;
  }

  else {
    alert("Dat is niet correct. Probeer het opnieuw, dit was poging " + poging + " van de 5")
  }
}
alert("Het nummer is: " + guessNumber)
alert("Spel is afgelopen.... Dag " + naam + ", tot de volgende keer")



