'use strict'

const Promise = require('bluebird');

//Creo una promesa
let hello = new Promise((resolve, reject) => {
	//Le digo a la promesa que será rechazada
	reject("Hello, welcome to the friendzone!");
});

//Con then cuando la promesa se rechaza se ejecutará la función que pasamos como parametro con el resultado que mandamos vía reject
hello
	.catch((error) => { 
		console.log(error);
	});

//Este ejemplo nos muestra una manera de hacer un catch pero existen otras
//Por ejemplo usando then, podemos pasar 2 funciones. Una cuando la promesa es resuelta y otra cuand es rechazada
hello
	.then(
		(message) => {
			console.log(message);
		},
		(error) => { 
			console.log(error);
		}
	);

//Podemos dejar null then, pero esto es solo con motivos de ejemplo, creo que nunca deberias hacerlo
hello
	.then(
		null,
		(error) => { 
			console.log(error);
		}
	);

//Podemos tenerlos por separado
//Al resolver una promesa esta ejecuta el primer then que encuentra
//Al rechazar una promsesa esta ejecuta el primer catch que encuentra
hello
	.then((message) => {
		console.log(message);
	})
	.catch((error) => { 
		console.log(error);
	});