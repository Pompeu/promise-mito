'use strict';
const banheiro = require('./banheiro');

banheiro.abrir_porta(true, (err, res) => {
	if(!err) {
		console.log(res);
		banheiro.levantar_tampa(true, (err, res) => {
			if(!err) {
				console.log(res);
					banheiro.acender_luz(true, (err, res) => {
						if(!err) {
							console.log(res);
							banheiro.tirando_fazedor_de_xixi(true, (err, res) => {
								if(!err) console.log(res);
							});	
						} 
					});
			}
		});
	}
});

