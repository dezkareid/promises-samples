'use strict'

const Promise = require('bluebird');

//Declaro funciones para obtener promesas rechazadas

const rejectNumber = (num) => {
	return Promise.reject(num);
}

const firstNumber = rejectNumber(1);

//Como then y catch nos regresan una promesa se pueden encadenar then y catch
//En este ejemplo nosotros estamos regresando promesas usando resolveNumber
firstNumber
	.then((result) => {
		console.log(result);
		return 2; //Aquí no entrará
	})
	.catch((result) => {
		console.log("Primer catch "+result); //Aquí entrará y regresará 3
		return 3;
	})
	.then((result) => {
		console.log(result);
		return rejectNumber(4); //Regresará una promesa rechazada con el número 4
	})
	.then((result) => {
		console.log(result);
		return 5;
	})
	.catch((result) => {
		console.log("Segundo catch "+result);
	});


