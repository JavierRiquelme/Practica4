Vue.component('candidato',{
	/*props: ['nombre', 'correoe', 'imagen'],*/
	props: {
		nombre: {
			type: [String, Array], //null = puede ser de todos los tipos
			required: true,
		},
		correoe: {
			type: String,
			default: 'javier@gamil.com',
		},
		imagen: String,
		location: {
			type: Object,
			default(){
				return {
					ciudad: 'Alicante',
				}
			}
		},
	},
	template: '#candidato-template',
});

new Vue({
	el: 'main',
	mounted(){
		this.obtenerCandidatos();
	},
	data: {
		candidatos: [],
	},
	methods: {
		obtenerCandidatos(){
			axios.get('https://randomuser.me/api/?results=100')
				.then((respuesta) => {
					this.candidatos = respuesta.data.results;
				});
		}
	}
});