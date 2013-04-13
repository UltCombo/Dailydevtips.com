describe('PrimeFactor', function () {

	it ('Deve retornar um array com a decomposicao em fatores primos', function () {

		expect(primeFactor(100)).toEqual([2, 2, 5, 5]);

		expect(primeFactor(2)).toEqual([2]);

		expect(primeFactor(12)).toEqual([2, 2, 3]);

		expect(primeFactor(15)).toEqual([3, 5]);

		expect(primeFactor(null)).toEqual([]);

	});

})