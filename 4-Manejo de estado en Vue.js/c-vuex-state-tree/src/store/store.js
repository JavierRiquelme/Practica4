import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
       nombre: 'Javier',
       apellidos: 'Riquelme Cerdá',
       profesion: 'Developer',
       ciudad: 'Alicante'
   }
});