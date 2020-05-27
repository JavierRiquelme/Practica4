import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import EquipoJavi from './components/EquipoJavi.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/equipo', component: Equipo, children: [
        {path: 'javi', component: EquipoJavi},
    ]},
];