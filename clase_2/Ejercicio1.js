/* Player 1 */
<<<<<<< HEAD
// Modificar valores de los "let" para verificar el programa
=======
// Modificar valores de las "var" para verificar el programa
>>>>>>> 84732caabbd88af8af6eafc0148a211546929d97
let vida = 0; // Variable de la vida
let pocionesDeVida = 1; // Variable de pociones

if (vida <= 0) {
  // se esta muriendo
  if (pocionesDeVida > 0) { 
    // se esta recuperando por las pociones
    pocionesDeVida = pocionesDeVida - 1;
    vida = vida + 1;
    console.log("SAFASTE");
    console.log("Vida restante:", vida);
    console.log("Pociones:", pocionesDeVida);
  } else { // murio
    console.log("PERDISTE");
  }
}
