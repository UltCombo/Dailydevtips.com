function ProgressionValidator(arr) {
	"use strict";

	var ret = [],
		progressions = ['pg', 'pa'],
		i = progressions.length,
		lastIndex = arr.length - 1,
		r, currProgression;

	while (i--) {
		currProgression = progressions[i];
		r = currProgression === 'pa' ? arr[1] - arr[0] : arr[1] / arr[0];

		if (arr.every(function(v, i, arr) {
			return i === lastIndex || (currProgression === 'pa' ? v + r : v * r) === arr[i+1];
		})) ret.push(currProgression);
	}
	return ret;
}
