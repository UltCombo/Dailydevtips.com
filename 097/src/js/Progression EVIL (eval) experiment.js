/* 
 * !! NÃO UTILIZE ESTA VERSÃO !!
 * 
 * Este experimento utiliza eval e o construtor Function (alias do eval) desnecessariamente.
 * Isto não é considerado boa prática e este arquivo é apenas para fins de teste.
 * Favor utilizar uma das outras versões caso nescessite desta função para uso real.
 **/

function ProgressionValidator(arr) {
	"use strict";

	var ret = [],
		progressions = ['pg', 'pa'],
		i = progressions.length,
		lastIndex = arr.length - 1,
		currProgression, ops, nextExpectedProgValueFn;

	while (i--) {
		currProgression = progressions[i];
		ops = currProgression === 'pa' ? ['-', '+'] : ['/', '*'];
		nextExpectedProgValueFn = new Function('v', 'return v ' + ops[1] + ' ' + eval(arr[1] + ops[0] + ' ' + arr[0]));

		if (arr.every(function(v, i, arr) {
			return i === lastIndex || nextExpectedProgValueFn(v) === arr[i+1];
		})) ret.push(currProgression);
	}
	return ret;
}
