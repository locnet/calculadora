<template>

	<div class="productBox">
		<div class="row ">
			<div class="col-md-2 col-8 col-sm-8 ">
				<h5 class="blue align-middle"><i class="fas fa-wifi yellow"></i> Fibra</h5>
			</div>

			<div class="col-md-2 col-4 col-sm-4 align-items-middle">
				<!-- Rounded switch -->
				<label class="switch">
					<input type="checkbox" v-model="switchFibra" 
							@click="internetSwitchButton(switchFibra = !switchFibra)">
					<span class="slider round"></span>
				</label>
			</div>
			
			<div class="h-20 d-md-none d-lg-none d-xl-none"></div><!-- separacion solo para moviles -->

			<div class="col-md-4 col-6 col-sm-6 pointer" @click="setInternetType('fibra500')">
				<div v-show="switchFibra" class="card text-center border-primary" 
					v-bind:class="{ 'selected-card': internetActiveType == 'fibra500' }">
					<div class="card-body">
						<h4 class="card-title blue">500 Mb</h4>
						<h4 class="card-text blue w-600">30 €<span class="small">/mes</span></h4>
					</div>
				</div>
			</div>

			<div class="col-md-4 col-6 col-sm-6 pointer" @click="setInternetType('fibra50')">
				<div v-show="switchFibra" class="card text-center border-primary" 
					v-bind:class="{ 'selected-card': internetActiveType == 'fibra50' }">
					<div class="card-body">
						<h4 class="card-title blue">50 Mb</h4>
						<h4 class="card-text blue w-600">25 €<span class="small">/mes</span></h4>
					</div>
				</div>
			</div>

		</div>

		<div class="h-30"></div><!-- separdor -->

		<div class="row" v-show="this.$store.state.internetPrice > 0">

			<!--  seccion telefono fijo -->
			
			<div class="col-md-2 col-8 col-sm-8 ">
				<h5 class="blue align-middle"><i class="fas fa-phone yellow"></i> Fijo </h5>
			</div>

			<div class="col-md-2 col-4 col-sm-4 align-items-middle">
				<!-- Rounded switch -->
				<label class="switch">
					<input type="checkbox" v-model="switchPhone" 
							@click="phoneSwitchButton(switchPhone = !switchPhone)">
					<span class="slider round"></span>
				</label>
			</div>
			<div class="h-20 d-md-none d-lg-none d-xl-none"></div><!-- separacion solo para moviles -->
			<div class="col-md-4 col-6 col-sm-6 pointer" 
						@click="setPhoneType('con_llamadas')">
				<div v-show="switchPhone" class="card text-center border-primary" 
					v-bind:class="{ 'selected-card': phoneActiveType == 'con_llamadas' }">

					<div class="card-body">
						<p class="card-text blue w-200">Con llamadas</p>
						<h4 class="card-text blue w-600">{{ phoneWithCallsPrice }} €
							<span class="small">/mes</span>
						</h4>
					</div>
				</div>
			</div>

			<div class="col-md-4 col-6 col-sm-6 pointer" 
						@click="setPhoneType('sin_llamadas')">
				<div v-show="switchPhone" class="card text-center border-primary" 
					v-bind:class="{ 'selected-card': phoneActiveType == 'sin_llamadas' }">

					<div class="card-body">
						<p class="card-text blue w-200">Sin llamadas</p>
						<h4 class="card-text blue w-600">{{ onlyPhonePrice }} €
							<span class="small">/mes</span>
						</h4>
					</div>
				</div>
			</div>			

		</div>

	</div>

</template>

<script>

	import { eventBus } from "../main";
	import { productMixin } from "../productMixin";
	import { mapMutations } from 'vuex';

	export default {
		mixins: [productMixin], // lista de precios centralizada

		data() {			

			return {
				internetActiveType: '',        //tipo fibra
				internetPrice: 0,
				switchFibra: false,            // el boton activar/desactivar fibra

				switchPhone: false,            // boton activar/desactivar fijo
				phoneActiveType: '',
				phoneWithCallsPrice: 0,        // precio telefono con fibra
				onlyPhonePrice: 0,       
				phonePrice: 0

			}
		},

		methods: {

			/* 
			|------------------------------------------|
			|    METODOS PARA LA FIBRA                 |
			|------------------------------------------|
			*/ 

			/**
			* @param t = string, el tipo de fibra
			* 
			*/
			setInternetType(t) {

				// el usuario ha elegido un tipo de fibra
				this.internetActiveType = t;

				this.updateInternetPrice(t);

				this.updatePhonePrice();

			},

			/**
			* se usa en el switch, enseña o esconde el div
			* @param v = boolean, 
			* 
			*/
			internetSwitchButton(v) {
				// si el usuario "esconde" la fibra despues de haberla seleccionado
				// hay que resetear el precio tanto de la fibra como el del fijo

				if (!v) {
					this.internetActiveType = '';  // reset fibra
					this.phoneActiveType = '';     // reset telefono fijo
					this.resetInternetPrice();        // reset precio fibra
					this.switchPhone = false;      // escondo div telefono fijo
					this.resetVoicePrice();           // reset precio telefono fijo

					//eventBus.$emit('internetPriceWasChanged', this.getTotalPrice());

				}
				
			},

			/**
			* actualiza el precio de la fibra
			* @param t = string, el tipo de fibra seleccionado
			*/

			updateInternetPrice(t) {
				if (t == 'fibra500') {
					this.setInternetPrice(this.fibra500.price);
					
				} else {
					this.setInternetPrice(this.fibra50.price);
					
				}
			},

			/*
			|--------------------------------------------|
			|       METODOS PARA EL FIJO                 |
			|--------------------------------------------|
			*/

			/**
			* @param t = string, el tipo de fijo
			*/
			setPhoneType(t) {

				this.phoneActiveType = t;
				this.updatePhonePrice();
				this.updateInternetPrice(this.internetActiveType);
				
			},

			/**
			* se encarga de actualizar de forma dinamica el precio del fijo
			* 
			*/
			updatePhonePrice() {

				// la primera vez que llamamos esta funcion es cuando el usuario ha
				// escogido una fibra
				// el precio del fijo con llamadas ilimitadas es diferente, dependiendo  
				// del tipo de fibra, por esto estoy obligado a cambiar el precio de manera
				// dinamica

				
				var x = this.fijoConLlamadas.price; // precio normal
				var y = x - (x * this.discount);              // precio con descuento de 40%
				this.onlyPhonePrice = this.fijoSinLlamadas.price; // fijo sin llamadas
				

				if (this.internetActiveType == 'fibra500') {
					// tiene un descuento de 40%
					this.phoneWithCallsPrice = y;
				
				} else {
					this.phoneWithCallsPrice = x;
				}
			

				if (this.phoneActiveType == "con_llamadas") {
					var p = 0;
					
					if (this.internetActiveType == "fibra500" ) {
						// fibra 500, tiene un descuento de 40%
						p = y;
						
					} else {
						// fibra 50
						p = x;

					}
					// actualiamos el precio en store.js
					this.setVoicePrice(p);

					// actualizamos el precio que se muestra en el div
					this.phoneWithCallsPrice = p;
					
				} else if (this.phoneActiveType == 'sin_llamadas') {
					this.setVoicePrice(this.onlyPhonePrice);
				}
				
				
				//eventBus.$emit('internetPriceWasChanged', this.getTotalPrice());

			},

			/**
			* lo activa el boton switch, activa/desactiva div precios telefono fijo
			* @param v boolean
			* @ return void
			*/

			phoneSwitchButton(v) {

				// el usuario esconde el div mediante el boton "switch"
				// se resetea el precio				
				if (!v) {

					this.phoneActiveType = '';
					this.resetVoicePrice();

				} else {
					this.updatePhonePrice();
				}

				//eventBus.$emit('internetPriceWasChanged', this.getTotalPrice());
				
			},

			/**
			* devuelve el precio total de fibra + fijo
			* @return array, formato [precio internet, precio fijo]
			*/
			getTotalPrice() {
				return [this.internetPrice, this.phonePrice];
			},

			...mapMutations([
				// map `this.incrementVoicePrice()` to `this.$store.commit('incrementVoicePrice')`,
			    'setVoicePrice',
			    'resetVoicePrice',
			    'setInternetPrice',
			    'resetInternetPrice',
			    ]),

		}
	}
</script>