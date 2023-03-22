import 'mocha';
import {expect} from 'chai';
import {Pikachu} from '../../src/mod/pikachu'
import {CreadorPikachu} from '../../src/mod/creadorPikachu';

describe('Test de la clase creadorPikachu', () => {
  it("Se comprueba el método factoryMehod", () => {
    const creadorPikachu = new CreadorPikachu("Pikachu", "amarillo", "electrico");
    const pikachu = creadorPikachu.factoryMethod();
    expect(pikachu).to.be.an.instanceOf(Pikachu);
    expect(pikachu.getNombre()).to.be.equal("Pikachu");
    expect(pikachu.getColor()).to.be.equal("amarillo");
    expect(pikachu.getTipo()).to.be.equal("electrico");
  });
});