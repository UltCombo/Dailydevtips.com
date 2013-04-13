var primeFactor = function() {
	"use strict";
	//caching
	var primos = [],
		cacheAt = 2;
	function everyCallback(v) {
		return cacheAt % v;
	}

	return function(n) {
		var ret = [];
		if (n <= 0) return ret;
		if (n === 1) return [1];

		//cacheia todos primos até o número passado
		for (; cacheAt <= n; cacheAt++) {
			if (primos.every(everyCallback)) primos.push(cacheAt);
		}

		for (var i = 0; n !== 1; i++) {
			while (n % primos[i] === 0) {
				ret.push(primos[i]);
				n /= primos[i];
			}
		}
		return ret;
	};
}();
