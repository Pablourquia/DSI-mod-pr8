/**
 * Interfaz común a todos los pokemon
 * @method getNombre retorna el nombre del pokemon
 * @method getColor retorna el color del pokemon
 * @method getTipo retorna el tipo del pokemon
 */
export interface Pokemon {
  getNombre() : string;
  getColor() : string;
  getTipo() : string;
}