const compartido =  {
    usuario: {
        nombre: 'Javier Riquelme',
    }
};

new Vue({
    el: '#app1',
    data: compartido,
});

new Vue({
    el: '#app2',
    data: compartido,
});