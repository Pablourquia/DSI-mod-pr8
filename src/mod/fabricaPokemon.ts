import { Pokemon } from "./pokemon";

/**
 * Clase abstracta creadora de pokemon
 * @method factoryMethod 
 * @method logic método que imprime la información del pokemon
 */
export abstract class CreadorPokemon {
    public abstract factoryMethod(): Pokemon;
    public logic(): string {
      const pokemon = this.factoryMethod();
      return `Me llamo ${pokemon.getNombre()}, ` +
             `soy de color ${pokemon.getColor()}` +
             ` y soy de tipo ${pokemon.getTipo()}`;
    }
  }