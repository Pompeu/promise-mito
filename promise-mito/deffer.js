'use strict';

let slice = Array.prototype.slice;

module.exports = function deffer(fn, argumentsCount) {
	argumentsCount = argumentsCount || Infinity;
	return function () {
		let self = this;
		let args = slice.call(arguments,0, argumentsCount > 0 ? argumentsCount : 0);
		return new Promise((resolve, reject) => {
			args.push((err, res) => {
				err ? reject(err) : resolve(res);
			})
			let res = fn.apply(self, args);
			if(res &&
				(typeof res === 'object' || typeof res === 'function') && 
				(typeof res.then === 'function' )){
				resolve(res);
			}
		});
	}
};
