import 'mocha';
import {expect} from 'chai';
import {Bulbasaur} from '../../src/mod/bulbasaur';
import {CreadorBulbasaur} from '../../src/mod/creadorBulbasaur';

describe('Test de la clase creadorPikachu', () => {
  it("Se comprueba el método factoryMehod", () => {
    const creadorBulbasaur = new CreadorBulbasaur("Bulbasaur", "verde", "planta");
    const bulbasaur = creadorBulbasaur.factoryMethod();
    expect(bulbasaur).to.be.an.instanceOf(Bulbasaur);
    expect(bulbasaur.getNombre()).to.be.equal("Bulbasaur");
    expect(bulbasaur.getColor()).to.be.equal("verde");
    expect(bulbasaur.getTipo()).to.be.equal("planta");
  });
});