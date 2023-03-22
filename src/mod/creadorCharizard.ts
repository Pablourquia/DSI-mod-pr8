import { Pokemon } from "./pokemon";
import { Charizard } from "./charizard";
import { CreadorPokemon } from "./fabricaPokemon";

/**
 * Clase creador charizard que hereda de la clase creador pokemon
 * @method factoyMethod que devuelve un charizard
 */
export class CreadorCharizard extends CreadorPokemon {
  constructor (private nombre: string, private color: string, private tipo: string) {
    super();
  }
  /**
   * Método que retorna un nuevo charizard
   * @returns un nuevo charizard
   */
  public factoryMethod(): Pokemon {
    return new Charizard(this.nombre, this.color, this.tipo);
  }
}