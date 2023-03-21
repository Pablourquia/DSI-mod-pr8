/**
 * Función que dado un número genera los n primeros números primos
 * @param entrada número de entrada
 * @returns array con los n primeros números primos
 */
export function CrearNumerosPrimos (entrada: number) : number[] {
  let numero = 1;
  let bool = true;
  let resultado : number[] = [];
  while (resultado.length !== entrada) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        bool = false;
      }
    }
    if (bool) {
      resultado.push(numero);
    }
    numero++;
    bool = true;
  }
  return resultado;
}

/**
 * Clase que almacena números primos
 * @method getPrimeNumber
 * @method getColeccionNumeros
 * @method setColeccionNumeros
 * @method getPrimerosNumerosPrimos
 * @method getNumerosPrimosRango
 */
export class PrimeNumber<T> implements Iterable<number>{
  private coleccionNumeros: number[] = [];
  private static primeNumber : PrimeNumber<number>;
  /**
   * Constructor privado
   * @param entrada número de entrada
   */
  private constructor (entrada: number) {
    this.coleccionNumeros = CrearNumerosPrimos(entrada);
  }
  /**
   * Método que invoca al constructor
   * @param entrada número de entrada
   * @returns instancia de la clase
   */
  public static getPrimeNumber(entrada: number): PrimeNumber<number> {
    if (!PrimeNumber.primeNumber) {
      PrimeNumber.primeNumber = new PrimeNumber(entrada);
    }
    return PrimeNumber.primeNumber;
  }
  /**
   * Getter de la clase
   * @returns el array con los números primos
   */
  getColeccionNumeros() : number[] {
    return this.coleccionNumeros;
  }
  /**
   * Setter de la clase
   * @param entrada número de entrada
   */
  setColeccionNumeros(entrada: number) {
    if(entrada < 0) {
      return;
    }
    this.coleccionNumeros = CrearNumerosPrimos(entrada);
  }
  /**
   * Método que retorna los n primeros números primos
   * @param entrada número de entrada
   * @returns un array con los n primeros números primos
   */
  getPrimerosNumerosPrimos(entrada: number): number[] | undefined {
    if (entrada < 0) {
      return undefined;
    }
    return this.coleccionNumeros.slice(0, entrada);
  }
  /**
   * Método que retorna los números primos comprendidos entre la entrada1 y la entrada2
   * @param entrada1 valor inferior de entrada
   * @param entrada2 valor superior de entrada
   * @returns un array con los números primos comprendidos entre esas posiciones
   */
  getNumerosPrimosRango (entrada1: number, entrada2: number): number[] | undefined {
    if (entrada1 < 0 || entrada2 < 0 || entrada1 > entrada2 || entrada1 > this.coleccionNumeros[this.coleccionNumeros.length - 1]) {
      return undefined;
    }
    return this.coleccionNumeros.filter((numero) => numero >= entrada1 && numero <= entrada2);
  }
  /**
   * Método que hace que la clase pueda ser iterable
   * @returns el iterador en la posicion
   */
  [Symbol.iterator](): Iterator<number> {
    return this.coleccionNumeros.values();
  }
}