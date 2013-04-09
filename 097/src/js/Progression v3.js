function ProgressionValidator(arr) {
	"use strict";

	var ret = [],
		l = arr.length-1,
		r, i, j, currProgression, isProgression,
		eqNextValue = function(nextExpectedProgValue) {
			//retorna boolean indicando se próximo valor de progressão esperado
			//corresponde ao valor do próximo item do array
			return nextExpectedProgValue === arr[i+1];
		},
		progressions = [
			{
				label: 'pa',
				razao: function() {
					return arr[1] - arr[0];
				},
				progressesToNextValue: function(currValue) {
					return eqNextValue(currValue + r);
				}
			}, {
				label: 'pg',
				razao: function() {
					return arr[1] / arr[0];
				},
				progressesToNextValue: function(currValue) {
					return eqNextValue(currValue * r);
				}
			}
		];

	for (j = 0; j < progressions.length; j++) {
		currProgression = progressions[j];
		r = currProgression.razao();
		isProgression = true;
		for (i = 1; i < l; i++) {
			//se progressão atual não progredir para próximo valor esperado
			if (!currProgression.progressesToNextValue(arr[i])) {
				isProgression = false;
				break;
			}
		}
		if (isProgression) ret.push(currProgression.label);
	}
	return ret;
}
