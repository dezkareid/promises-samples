'use strict'

const Promise = require('bluebird');

let hello = new Promise((resolve, reject) => {
	resolve("Hello, it's me!"); 
});

//Aunque las promesas se resuelven de manera asíncrona el código ejecutado no lo es
hello
	.then((message) => {
		try {
			throw new Error("Voy a lanzar un error porque quiero :3");
		} catch (exception) {
			return Promise.reject(exception);
		}
	})
	.catch((error) => {
		console.log(error);
	});
