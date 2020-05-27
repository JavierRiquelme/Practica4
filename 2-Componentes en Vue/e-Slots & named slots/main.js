Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
                    <slot name="header">Hola</slot>
                </header>
                <div class="alerta__contenido">
                        <slot>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute 
							iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat 
							non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </slot>
                </div>
                <footer class="alerta__footer">
                    <slot name="footer">Este es el texto del footer</slot>
                </footer>
            </section>`,
});

new Vue({
    el: 'main',
});