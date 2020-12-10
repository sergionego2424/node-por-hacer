const { argv } = require('./config/yargs');
const { crear, actualizar, borrarTarea  , getListado} = require('./por-hacer/por-hacer');

const colors = require('colors');

const comando = argv._[0];


switch(comando){

	case 'crear':
		let tarea =	crear(argv.descripcion);
		console.log(tarea)
	break;
	case 'listar':
		let listado =  getListado(argv.completado);
		
		for(let tarea of listado){
			console.log('==========	POR HACER ======='.green);
			console.log(tarea.descripcion);
			console.log('Estado  : ' ,tarea.completado);
			console.log('============================='.green)
		}

	break;
	case 'actualizar':
		let actualizado = 	actualizar(argv.descripcion , argv.completado);
		console.log(actualizado);
	break;
	case 'borrar' :
		let borrar = borrarTarea(argv.descripcion);
		console.log(borrar);
	break;
	default :
	console.log('comando no es reconocido')
}

