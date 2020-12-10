const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
	let data = JSON.stringify(listadoPorHacer);

	fs.writeFile('./DB/data.json' , data , error => {
		if(error) {
			console.log('No se ha podido guardar la informacion en el archivo');
		}
	})

}

const cargarDB = () => {	
	try{
		listadoPorHacer = require('../DB/data.json');
	}catch(error){
		listadoPorHacer = [];
	}

}

const crear = descripcion => {

	cargarDB();

	let porHacer = {
		descripcion,
		completado : false
	};

	listadoPorHacer.push(porHacer);

	guardarDB();

	return porHacer;

}

const actualizar = (descripcion , completado = true ) => {
	cargarDB();

	let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

	if(index >= 0){
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	}else{
		return false;
	}

}

const borrarTarea = descripcion => {
	cargarDB();

	let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

	if(index >= 0){
		listadoPorHacer.splice(index , 1);
		guardarDB();
		return true;
	}else{
		return false;
	}

}

const getListado = (completado) => {

	cargarDB();

	if(completado === undefined){
		const listado = require('../DB/data.json');
		return listado;
	}

	const nuevoListado = listadoPorHacer.filter(tarea => {
		return tarea.completado === completado;
	})	

	return nuevoListado;


}

module.exports = {
	crear,
	cargarDB,
	actualizar,
	borrarTarea,
	getListado
	
}