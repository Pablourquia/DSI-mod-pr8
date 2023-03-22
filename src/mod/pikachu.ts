import { Pokemon } from "./pokemon";

/**
 * Clase Pikachu que implementa la interfaz Pokemon
 * @method getNombre retorna el nombre del pokemon
 * @method getColor retorna el color del pokemon
 * @method getTipo retorna el tipo del pokemon
 */
export class Pikachu implements Pokemon {
  constructor(private nombre: string, private color: string, private tipo: string) {
    this.nombre = nombre;
    this.color = color;
    this.tipo = tipo;
  }
  /**
   * Método que retorna el nombre del pokemon
   * @returns el nombre del pokemon
   */
  getNombre() : string {
    return this.nombre;
  }
  /**
   * Método que retorna el color del pokemon
   * @returns el color del pokemon
   */
  getColor() : string {
    return this.color;
  }
  /**
   * Método que retorna el tipo del pokemon
   * @returns el tipo del pokemon
   */
  getTipo() : string {
    return this.tipo;
  }
}