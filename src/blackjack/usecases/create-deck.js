import _ from 'underscore';

/**
 *
 * @param {Array<String>} tiposDecarta ej: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales ej: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} returns a new deck
 */
export const crearDeck = (tiposDecarta, tiposEspeciales) => {
  if (!tiposDecarta || tiposDecarta.length === 0)
    throw new Error('Tipos de Carta es obligatorio');
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error('Tipos especiales es obligatorio');

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDecarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDecarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);

  return deck;
};
