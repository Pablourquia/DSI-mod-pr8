import 'mocha';
import {expect} from 'chai';
import {PrimeNumber, CrearNumerosPrimos} from '../../src/mod/PrimeNumber';

describe('Test de la función CrearNumerosPrimos', () => {
	it ("Comprobamos la función CrearNumerosPrimos funciona correctamente", () => {
    expect(CrearNumerosPrimos(5)).to.be.eql([ 1, 2, 3, 5, 7 ]);
		expect(CrearNumerosPrimos(6)).to.be.eql([ 1, 2, 3, 5, 7, 11]);
  });
});

describe('Test de la clase PrimeNumber', () => {
	let primeNumberPrueba = PrimeNumber.getPrimeNumber(25);
	let primeNumber = PrimeNumber.getPrimeNumber(25);
	it ("Comprobamos que se crea bien y que el getter devuelve el tamaño que corresponde", () => {
    expect(primeNumber.getColeccionNumeros().length).to.be.equal(25);
  });
	it ("Comprobamos que el método get y set funciona correctamente", () => {
    expect(primeNumber.getColeccionNumeros().length).to.be.equal(25);
		primeNumber.setColeccionNumeros(4);
		expect(primeNumber.getColeccionNumeros().length).to.be.equal(4);
		primeNumber.setColeccionNumeros(-1);
		expect(primeNumber.getColeccionNumeros().length).to.be.equal(4);
  });
	it ("Comprobamos que el método getPrimerosNumerosPrimos funciona", () => {
    primeNumber.setColeccionNumeros(25);
    expect(primeNumber.getPrimerosNumerosPrimos(-1)).to.be.equal(undefined);
		expect(primeNumber.getPrimerosNumerosPrimos(5)).to.be.eql([ 1, 2, 3, 5, 7 ]);
  });
	it ("Comprobamos que el método getNumerosPrimosRango funciona", () => {
    expect(primeNumber.getNumerosPrimosRango(-2,4)).to.be.equal(undefined);
		expect(primeNumber.getNumerosPrimosRango(2,-4)).to.be.equal(undefined);
		expect(primeNumber.getNumerosPrimosRango(4,2)).to.be.equal(undefined);
		expect(primeNumber.getNumerosPrimosRango(2,16)).to.be.eql([ 2, 3, 5, 7, 11, 13 ]);
  });
	it ("Comprobamos que implementa bien la interfaz Iterable", () => {
		let contador = 0;
		for (let valor of primeNumber) {
			expect(valor).to.be.equal(primeNumber.getColeccionNumeros()[contador]);
			contador++;
		}
  });
});