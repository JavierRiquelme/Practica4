const vm = new Vue({
	el: 'main',
	data: {
		laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
		tareas: [
			{nombre: 'Hacer la compra', prioridad: 'baja'},
			{nombre: 'Aprender Vue y Firebase', prioridad: 'alta'},
			{nombre: 'Ir al gymnasio', prioridad: 'alta'},
		],
		persona: {
			nombre: 'Javi',
			profesion: 'dev',
			ciudad: 'Elche'
		}
	},
});