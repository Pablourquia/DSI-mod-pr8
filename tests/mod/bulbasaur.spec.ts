import 'mocha';
import {expect} from 'chai';
import {Bulbasaur} from '../../src/mod/bulbasaur';

describe('Test de la clase bulbasaur', () => {
  it("Se crea correctamente el pokemon y se puede acceder a los getters", () => {
    const bulbasaur = new Bulbasaur("Bulbasaur", "verde", "planta");
    expect(bulbasaur.getNombre()).to.be.equal("Bulbasaur");
    expect(bulbasaur.getColor()).to.be.equal("verde");
    expect(bulbasaur.getTipo()).to.be.equal("planta");
  });
});