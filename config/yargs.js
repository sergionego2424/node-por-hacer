const descripcion = {
		alias : 'd',
		demand : true
};
const completado = {
		alias : 'c',
		default : true,
}
const completado_listar = {
	alias : 'c'
}
module.exports.argv =  require('yargs')
							.command('crear' , 
									'Crea un elemento por hacer' , {
								descripcion 
							})
							.command('actualizar' , 'Actualiza el estado completado de una tarea' , {
								descripcion ,
								completado 
							})
							.command('listar' , 'Lista todas las tareas' , {
								completado : completado_listar
							})
							.command('borrar' , 'Borra una tarea' , {
								descripcion 
							})
							.help()
							.argv;
