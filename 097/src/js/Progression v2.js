function ProgressionValidator(arr) {
	"use strict";

	var ret = [],
		l = arr.length-1,
		r, i, passesTest,
		eqNext = function(v) {
			return v === arr[i+1];
		},
		razoes = {
			pa: function() {
				return arr[1] - arr[0];
			},
			pg: function() {
				return arr[1] / arr[0];
			}
		},
		tests = {
			pa: function(v) {
				return eqNext(v + r);
			},
			pg: function(v) {
				return eqNext(v * r);
			}
		};

	for (var test in tests) {
		if (tests.hasOwnProperty(test)) {
			r = razoes[test]();
			passesTest = true;
			for (i = 1; i < l; i++) {
				if (!tests[test](arr[i])) {
					passesTest = false;
					break;
				}
			}
			if (passesTest) ret.push(test);
		}
	}
	ret.sort();
	return ret;
}
