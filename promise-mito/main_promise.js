'use strict';
const banheiro = require('./banheiro');
const deffer = require('./deffer');
let promises = [];

let abrir_porta = deffer(banheiro.abrir_porta);
let levantar_tampa =  deffer(banheiro.levantar_tampa);
let acender_luz = deffer(banheiro.acender_luz);
let tirando_fazedor_de_xixi = deffer(banheiro.tirando_fazedor_de_xixi);

promises.push(abrir_porta(true));
promises.push(levantar_tampa(true));
promises.push(acender_luz(true));
promises.push(tirando_fazedor_de_xixi(true));

Promise
	.all(promises)
	.then(success,error);


function success (data){
	console.log(data);
}

function error (err){
	console.log(err);
}

