import 'mocha';
import {expect} from 'chai';
import {Pikachu} from '../../src/mod/pikachu';

describe('Test de la clase pikachu', () => {
  it("Se crea correctamente el pokemon y se puede acceder a los getters", () => {
    const pikachu = new Pikachu("Pikachu", "amarillo", "electrico");
    expect(pikachu.getNombre()).to.be.equal("Pikachu");
    expect(pikachu.getColor()).to.be.equal("amarillo");
    expect(pikachu.getTipo()).to.be.equal("electrico");
  });
});