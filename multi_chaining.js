'use strict'

const Promise = require('bluebird');

//Pasos para validad politicas en un proceso
function validacionPoliticas() {
	return Promise.resolve("Esta ")
		.then((message) => { 
			return message + "serie ";
		})
		.then((message) => { 
			return message + "de ";
		})
		.then((message) => { 
			return message + "promesas ";
		})
		.then((message) => { 
			return message + "son ";
		})
		.then((message) => { 
			return message + "politicas";
		});
}

//Pasos para validad politicas en un proceso
function validacionDatos() {
	return Promise.resolve("Esta ")
		.then((message) => { 
			return message + "serie ";
		})
		.then((message) => { 
			return message + "de ";
		})
		.then((message) => { 
			return message + "promesas ";
		})
		.then((message) => { 
			return message + "son ";
		})
		.then((message) => { 
			return message + "validaciones";
		});
}

let admin = true; //bandera para ignorar un proceso

Promise.resolve("Proceso empezo")
	.then((message) => { 
		console.log(message);
		return validacionDatos();
	})
	.then((message) => {
		console.log(message);
		if (admin){
			return "Soy admin puedo hacer lo que se me de la gana, soy hijo de ricos";
		} else {
			return validacionPoliticas();
		}
		
	})
	.then((message) => {
		console.log(message);
		console.log("Finalizo proceso");
	});