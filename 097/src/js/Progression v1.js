function ProgressionValidator(arr) {
	"use strict";

	var ret = [],
		l = arr.length-1,
		r, i;

	//define a constante R da PA
	r = arr[1] - arr[0];

	var isPA = true;
	for (i = 1; i < l; i++) {
		if (arr[i] + r !== arr[i+1]) {
			isPA = false;
			break;
		}
	}
	if (isPA) ret.push('pa');

	//define a constate R da PG
	r = arr[1] / arr[0];

	var isPG = true;
	for (i = 1; i < l; i++) {
		if (arr[i] * r !== arr[i+1]) {
			isPG = false;
			break;
		}
	}
	if (isPG) ret.push('pg');

	return ret;
}
