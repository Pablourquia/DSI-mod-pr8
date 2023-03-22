import 'mocha';
import {expect} from 'chai';
import {CreadorCharizard} from '../../src/mod/creadorCharizard';
import {Charizard} from '../../src/mod/charizard';

describe('Test de la clase creadorCharizard', () => {
  it("Se comprueba el método factoryMehod", () => {
    const creadorCharizard = new CreadorCharizard("Charizard", "rojo", "fuego");
    const charizard = creadorCharizard.factoryMethod();
    expect(charizard).to.be.an.instanceOf(Charizard);
    expect(charizard.getNombre()).to.be.equal("Charizard");
    expect(charizard.getColor()).to.be.equal("rojo");
    expect(charizard.getTipo()).to.be.equal("fuego");
  });
});