'use strict'

const Promise = require('bluebird');

const resources = {
	'1' : { id : 1, name : 'Resource A', authkey : 3 },
	'2' : { id : 2, name : 'Resource B', authkey : 2 },
	'3' : { id : 3, name : 'Resource C', authkey : 1 },
	'4' : { id : 4, name : 'Resource D', authkey :  10 }
};

const entities = {
	'1' : { id : 1, name : 'base', key : 1, parent : null },
	'2' : { id : 2, name : 'admin', key : 2, parent : '1' },
	'3' : { id : 3, name : 'user x', key : 3, parent : '2' },
};

const isAuthorized = (entityId, resourceId ) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			var resource = resources[resourceId];
			var entity = entities[entityId];
			if ( entity.key === resource.authkey){
				resolve(true);
			} else {
				if ( entity.parent ) {
					resolve( isAuthorized(entity.parent, resourceId));
				} else {
					resolve(false);
				}
			}
		}, 300);
	});
};

//Request For Resource A From User x
isAuthorized('3', '1' )
	.then((authorized) => {
		console.log('User has permissions to resource A : ' + authorized); //Must be true
		//Request For Resource B From User x
		return isAuthorized('3', '2' );
	})
	.then((authorized) => {
		console.log('User has permissions to resource B : ' + authorized); //Must be true
		//Request For Resource C From User x
		return isAuthorized('3', '3' )
	})
	.then((authorized) => {
		console.log('User has permissions to resource C : ' + authorized); //Must be true
		//Request For Resource D From User x
		return isAuthorized('3', '4' );
	})
	.then((authorized) => {
		console.log('User has permissions to resource D : ' + authorized); //Must be false
	});;