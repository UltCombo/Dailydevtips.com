describe('MissingTime', function () {

	it ('Deve retornar a quantidade de tempo que falta para acabar o dia', function () {
		expect(missingTime('12:00:00')).toBe('11:59:59');
		expect(missingTime('23:59:10')).toBe('00:00:49');
		expect(missingTime('00:00:00')).toBe('23:59:59');

		expect(missingTime(null)).toBe('23:59:59');
		expect(missingTime(undefined)).toBe('23:59:59');
	});
});