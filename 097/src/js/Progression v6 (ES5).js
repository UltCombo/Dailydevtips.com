function ProgressionValidator(arr) {
	"use strict";

	var ret = [],
		progressions = ['pg', 'pa'],
		i = progressions.length,
		lastIndex = arr.length - 1,
		r, currProgression, nextExpectedProgValueFn;

	while (i--) {
		currProgression = progressions[i];
		if (currProgression === 'pa') {
			r = arr[1] - arr[0];
			nextExpectedProgValueFn = function(v) {
				return v + r;
			};
		} else {
			r = arr[1] / arr[0];
			nextExpectedProgValueFn = function(v) {
				return v * r;
			};
		}

		if (arr.every(function(v, i, arr) {
			return i === lastIndex || nextExpectedProgValueFn(v) === arr[i+1];
		})) ret.push(currProgression);
	}
	return ret;
}
