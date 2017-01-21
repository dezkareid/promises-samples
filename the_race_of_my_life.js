'use strict'

const Promise = require('bluebird');

//Simulación de un proceso de solicitud de datos en navegador
let getCacheData = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Busqueda de datos en cache");
});

//Simulación de solicitud de datos en red
let getNetworkData = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Busqueda de datos en la red");
});

//Iniciando la carrera y obteniendo el resultado de la primera en resolverse
Promise.race([getCacheData, getNetworkData])
	.then( value => {
  		console.log(value);
  	});