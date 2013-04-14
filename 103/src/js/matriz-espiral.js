function MatrizEspiral(cols, rows) {
	"use strict";
	var topRow = 0,
		botRow = rows-1,
		leftCol = 0,
		rightCol = cols-1,
		n = 1,
		total = rows * cols,
		ret = [],
		i;

	for (i = 0; i < rows; i++) {
		ret[i] = [];
	}

	while (n < total) {
		//horizontal top
		for (i = leftCol; i <= rightCol; i++) {
			ret[topRow][i] = n++;
		}
		topRow++;
		//vertical right
		for (i = topRow; i <= botRow; i++) {
			ret[i][rightCol] = n++;
		}
		rightCol--;
		//horizontal bottom
		for (i = rightCol; i >= leftCol; i--) {
			ret[botRow][i] = n++;
		}
		botRow--;
		//vertical left
		for (i = botRow; i >= topRow; i--) {
			ret[i][leftCol] = n++;
		}
		leftCol++;
	}
	return ret;
}
