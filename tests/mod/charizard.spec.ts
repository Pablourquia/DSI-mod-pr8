import 'mocha';
import {expect} from 'chai';
import {Charizard} from '../../src/mod/charizard';

describe('Test de la clase charizard', () => {
  it("Se crea correctamente el pokemon y se puede acceder a los getters", () => {
    const charizard = new Charizard("Charizard", "rojo", "fuego");
    expect(charizard.getNombre()).to.be.equal("Charizard");
    expect(charizard.getColor()).to.be.equal("rojo");
    expect(charizard.getTipo()).to.be.equal("fuego");
  });
});