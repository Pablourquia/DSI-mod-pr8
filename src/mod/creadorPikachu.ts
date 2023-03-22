import { Pokemon } from './pokemon';
import { Pikachu } from './pikachu';
import { CreadorPokemon } from './fabricaPokemon';

/**
 * Clase Pikachu que implementa la interfaz Pokemon
 * @method factoryMethod que retorna un objeto de tipo Pikachu
 */
export class CreadorPikachu extends CreadorPokemon {
  constructor(private nombre: string, private color: string, private tipo: string) {
    super();
  }
  /**
   * Método que retorna un objeto de tipo Pikachu
   * @returns un objeto de tipo Pikachu
   */
  public factoryMethod(): Pokemon {
    return new Pikachu(this.nombre, this.color, this.tipo);
  }
}