describe('MatrizEspiral', function () {

	it ('Deve retornar uma matriz espiral que incrementa no sentido horário', function () {
		var response = []
		response[0] = [ 1,   2,  3];
		response[1] = [10,  11,  4];
		response[2] = [ 9,  12,  5];
		response[3] = [ 8,  7,   6];

		expect(MatrizEspiral(3, 4)).toEqual(response);

		var response2 = []
		response2[0] = [ 1,  2,  3,  4,  5];
		response2[1] = [18, 19, 20, 21,  6];
		response2[2] = [17, 28, 29, 22,  7];
		response2[3] = [16, 27, 30, 23,  8];
		response2[4] = [15, 26, 25, 24,  9];
		response2[5] = [14, 13, 12, 11, 10];

		expect(MatrizEspiral(5, 6)).toEqual(response2);

		var response3 = []
		response3[0] = [ 9,  10,  3];
		response3[1] = [ 8,  11,  4];
		response3[2] = [ 7,   6,  5];
	});

})