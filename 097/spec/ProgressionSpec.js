describe('ProgressionValidator', function () {

	it ('Deve retornar um array ["pa"] quando tratar-se de uma progressao aritmetica', function () {

		expect(ProgressionValidator([1, 3, 5])).toEqual(['pa']);
		expect(ProgressionValidator([10, 8, 6])).toEqual(['pa']);
		expect(ProgressionValidator([-3, -7, -11])).toEqual(['pa']);

	});

	it ('Deve retornar um array ["pg"] quando tratar-se de uma progressao geometrica', function () {

		expect(ProgressionValidator([1, 3, 5])).toEqual(['pg']);
		expect(ProgressionValidator([10, 8, 6])).toEqual(['pg']);
		expect(ProgressionValidator([-3, -7, -11])).toEqual(['pg']);

	});

	it ('Deve retornar um array ["pa", "pg"] quando a sequência pode ser ambas', function () {

		expect(ProgressionValidator([1, 1, 1])).toEqual(['pa', 'pg']);
		expect(ProgressionValidator([10, 10, 10])).toEqual(['pa', 'pg']);
		expect(ProgressionValidator([-3, -3, -3])).toEqual(['pa', 'pg']);

	});

	it ('Deve retornar um array vazio [] quando nao for nenhuma das progressoes abordadas', function () {

		expect(ProgressionValidator([1, 3, 7])).toEqual([]);
		expect(ProgressionValidator([4, 8, 9])).toEqual([]);
		expect(ProgressionValidator([22, 11, 10])).toEqual([]);

	});

})