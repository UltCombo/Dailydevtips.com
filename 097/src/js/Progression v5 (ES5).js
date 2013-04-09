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

		if (arr.every(function(nextExpectedProgValueFn, v, i, arr) {
			return i === lastIndex || nextExpectedProgValueFn(v) === arr[i+1];
		}.bind(arr, currProgression === 'pa' ? function(v) {
			return v + r;
		} : function(v) {
			return v * r;
		}))) ret.push(currProgression);
	}
	return ret;
}
