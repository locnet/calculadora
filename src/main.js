import Vue from 'vue'
import App from './App.vue'



//Vue.component('example-component', require('./components/ExampleComponent.vue'));
//Vue.component('app-calc-container', require('./components/CalcContainer.vue').default);
Vue.component('app-fibra', require('./components/Fibra.vue').default);
Vue.component('app-movil', require('./components/Movil.vue').default);
Vue.component('app-price-component', require('./components/PriceComponent.vue').default);
Vue.component('app-modal-tarifas', require('./modals/ModalTarifas.vue').default);



// event bus
const eventBus = new Vue();

// import store
import {store} from './store/store';

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
