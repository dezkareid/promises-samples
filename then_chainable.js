'use strict'

const Promise = require('bluebird');

//Declaro funciones para obtener promesas aceptadas o rechazadas
const resolveNumber = (num) => {
	return Promise.resolve(num);
}

const rejectNumber = (num) => {
	return Promise.reject(num);
}

const firstNumber = resolveNumber(1);

//Como then y catch nos regresan una promesa se pueden encadenar then y catch
//En este ejemplo nosotros estamos regresando promesas usando resolveNumber
firstNumber
	.then((result) => {
		console.log(result);
		return resolveNumber(2);
	})
	.then((result) => {
		console.log(result);
		return resolveNumber(3);
	})
	.then((result) => {
		console.log(result);
	});

//En este ejemplo nosotros estamos regresando promesas usando resolveNumber,
//pero then para poder mandar un valor al próximo then de la cadena no necesariamente debe ser una promesa
//también puede ser un valor
firstNumber
	.then((result) => {
		console.log(result);
		return 2;
	})
	.then((result) => {
		console.log(result);
		return 3;
	})
	.then((result) => {
		console.log(result);
	});

//También puedes optar por no regresar nada y solo hacer una secuencia de pasos
firstNumber
	.then((result) => {
		console.log(result);
	})
	.then(() => {
		console.log(2);
	})
	.then(() => {
		console.log(3);
	});
