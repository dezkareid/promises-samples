'use strict'

const Promise = require('bluebird');

//Creo una promesa
let hello = new Promise((resolve, reject) => {
	//Le digo a la promesa que se va a resolver y lo que va a regresar
	resolve("Hello, it's me!"); 
});

//Con then cuando la promesa se resuelva se ejecutará la función que pasamos como parametro con el resultado que mandamos vía resolve
hello
	.then((message) => { 
		console.log(message);
	});

//Si por alguna razón quisieras regresar un valor como promesa o rechazarlo
//Puedes usar Promise.reject o Promise.resolve

hello = Promise.resolve("Hello, it's me again!");

hello
	.then((message) => { 
		console.log(message);
	});