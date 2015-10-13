'use strict';

module.exports.abrir_porta = function abrir_porta(action,callback){
	if(action) { 
		return callback(null,'Posta aberta!!');
	}
	return callback(new Error('erro ao abrir porta'));
}

module.exports.levantar_tampa = function levantar_tampa(action, callback) {
	if(action) { 
		return callback(null, 'Tampa Levantada!!!');
	}
	return callback(new Error('erro ao levantar tampa'));
}

module.exports.acender_luz =  function acender_luz(action, callback) {
	if(action) { 
		return callback(null, 'Luz acesa!!!');
	}
	return callback(new Error('erro ao acender a luz'));
}

module.exports.tirando_fazedor_de_xixi = function tirando_fazedor_de_xixi(action, callback) {
	if(action) { 
		return callback(null, 'fazedor de xixi de fora(coisa feia)!!!');
	}
	return callback(new Error('fazedor de xixi undefined T_T'));
}

