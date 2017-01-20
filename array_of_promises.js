'use strict'

const Promise = require('bluebird');

//Creo un arreglo para almacenar las promesas
let promises_array = [];

promises_array.push(Promise.resolve("Este"));
promises_array.push(Promise.resolve("es"));
promises_array.push(Promise.resolve("un"));
promises_array.push(Promise.resolve("arreglo"));
promises_array.push(Promise.resolve("de"));
promises_array.push(Promise.resolve("promesas"));

//Con Promise.all podemos agrupar un grupo de promesas, que entraran al then solo si todas se cumplen
Promise.all(promises_array)
	.then( promises_resolved => { 
		for (let value of promises_resolved) {
			console.log(value);
		}
	});

//El detalle de este método es que si aunque sea una promesa falla se ira directamente al bloque catch
promises_array.push(Promise.reject("Ey, te falle y entre al catch :("))
Promise.all(promises_array)
	.then( promises_resolved => { 
		for (let value of promises_resolved) {
			console.log(value);
		}
	})
	.catch ( error => {
		console.log(error);
	});

//Pero si quieres evitar este tipo de comportamiento y poder obtener los datos de las promesas aunque una falle
//Puedes atrapar el error de la promesa que ejecutaste agregando un catch para manejar el error y que no afecte tu flujo principal
//Recuerda que then y catch al fin y al cabo regresan promesas
function getPromiseWithCachedError() {
	return Promise.reject("Esta promesa no se cumplira... pero no entrará en el catch")
		.then( resolved => {
			console.log("Ella te ama :D, esto jamas pasará");
		})
		.catch ( error => {
			return error;
		});
}

//Eliminamos del arreglo la promesa rechazada
promises_array.pop();

//Agregamos la promesa atrapa los errores
promises_array.push(getPromiseWithCachedError());

Promise.all(promises_array)
	.then( promises_resolved => { 
		for (let value of promises_resolved) {
			console.log(value);
		}
	})
	.catch ( error => {
		console.log("No vas a entrar a este bloque ni a su corazón");
	});
