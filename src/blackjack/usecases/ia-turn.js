import { createCard, pedirCarta, valorCarta } from './';

/**
 *
 * @param {Number} puntosMinimos
 * @param {HTMLElement>} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<String>} deck
 * @returns {void}
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error('Puntos minimos requeridos');
  if (!deck) throw new Error('Deck es requerido');
  if (!puntosHTML) throw new Error('puntosHTML es requerido');
  do {
    const carta = pedirCarta(deck);
    let puntosComputadora = 0;

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = createCard(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Nadie gana :(');
    } else if (puntosMinimos > 21) {
      alert('Computadora gana');
    } else if (puntosComputadora > 21) {
      alert('Jugador Gana');
    } else {
      alert('Computadora Gana');
    }
  }, 100);
};
