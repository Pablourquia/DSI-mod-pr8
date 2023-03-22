import { Pokemon } from './pokemon';
import { Bulbasaur } from './bulbasaur';
import { CreadorPokemon } from './fabricaPokemon';

/**
 * Clase creador bulbasaur que implementa la interfaz Pokemon
 * @method factoryMethod que retorna un objeto de tipo Bulbasaur
 */
export class CreadorBulbasaur extends CreadorPokemon {
  constructor(private nombre: string, private color: string, private tipo: string) {
    super();
  }
  /**
   * Método que retorna un objeto de tipo Bulbasaur
   * @returns un objeto de tipo Bulbasaur
   */
  public factoryMethod(): Pokemon {
    return new Bulbasaur(this.nombre, this.color, this.tipo);
  }
}