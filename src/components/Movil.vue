<template>

	<section class="productBox">
		<div class="row">
			<div class="col-md-2 col-8 col-sm-8">
				<h5 class="blue"><i class="fas fa-mobile-alt yellow"></i> Movil</h5>
			</div>

			<div class="col-md-2 col-4 col-sm-4 align-items-top">
					<!-- Rounded switch -->
					<label class="switch">
						<input type="checkbox" v-model="switchMovil" 
								@click="mobileToggleButton(switchMovil = !switchMovil)">
						<span class="slider round"></span>
					</label>
			</div>
			<!-- container moviles -->
			<div class="col-md-8 col-12 col-sm-12 mt-3 mt-md-0">

				<div class="row" v-for="(index,key) in this.$store.state.mobilesColection">

					<div class="col-10 col-sm-10 col-md-10 mb-3 border pointer"
							@click="setSelectedMobileIndex(key)"
							data-toggle="modal" 		
							data-target="#exampleModal"
							>

						<h4 class="text-center m-3" 
							v-show="index.price == 0">Elige una tarifa 
						</h4>

						<div  class="row text-center align-items-center"
								 v-show="index.price > 0">

							<div class="col-4" >

								<p class="extra-small"><strong>{{ index.name }} </strong></p>

							</div>

							<div class="col-4">
								<p class="extra-small blue bold align-middle">
									{{ index.minutes.shortDesc }}<br/>
									{{ checkGb(index) }}GB
								</p>
							</div>

							<div class="col-4 p-2" :class="[index.divColor]" >
								<h3 class="white w-600 align-middle">
									{{ getMobilePrice(index) }}€<span class="small">/mes</span></h3>

							</div>
						</div>
						
						<!--	
						<div class="col-12">
							<button type="button" class="btn btn-outline-primary " 
							         data-toggle="modal" 		
							         data-target="#exampleModal"
							         @click="setSelectedMobileIndex(key)">

							  	{{ index.price > 0 ? 'Cambia tarifa' : 'Elige una tarifa' }}
							  	
							</button>
						</div>
					-->
					</div>
					<div class="col-2 text-right pointer">
						<span class=" align-middle">
							<i class="fas fa-trash red mt-4" 
								@click="destroyView(key)"></i>
						</span>
					</div>
				</div>

				
				<div class="col-md-12 col-12 col-sm-12" v-show="switchMovil && phoneCounter < 4">
					<p @click="addNewMobileView" class="pointer" 
						style="margin-top:20px">
						<i class="fas fa-plus-circle green" style="font-size: 26px"></i> 
						Añadir movil
					</p>
						
				</div>
			</div>		

		</div>
		<app-modal-tarifas 
				:selectedMobileIndex="selectedMobileIndex"></app-modal-tarifas>
	</section>


</template>

<script>
	import { eventBus } from "../main";	

	import { productMixin } from "../productMixin";

	import { mapMutations } from 'vuex';
	
	export default {
		mixins: [productMixin], // lista de precios centralizada

		data() {
			return {
				switchMovil: false,      // controla la visibilidad de todo el container
				phoneCounter: 0,         // contador vistas activas

				selectedMobileIndex: false,
			}
		},

		methods: {

			/**
			* @param v boolean, true o false segun el estado del boton switch
			*/

			mobileToggleButton(v) {

				if (!v) {
					
					// pongo el contador de vistas a zero
					this.phoneCounter = 0;

					// reset a 0 el precio de los moviles
					this.resetMobilePrice;	
					// limpio el array de los moviles
					this.resetMobilesColection();
				}
			},

			/**
			* cada vez que el boton es pulsado  
			* activa un telefono movil a la vez
			*/
			addNewMobileView() {

				if (this.phoneCounter < 4) {

					var m = {
						name: '',
						price: 0,
						bonus_price: 0, 
						minutes: '',
						gb: '',
						bonus_gb: '',
						divColor: ''
					};

					// creamos un nuevo elemento en el array, que sera el ultimo
					// en js cuando se borra un elemento no afecta la longitud del array,
					// el elemento sigue ocupando su posicion pero con falor false
					this.addNewMobile(m);

					
					// incremento el contador de vistas activas
					this.phoneCounter++;
				}
			}, 

			/**
			* @param int index, posicion de la vista a destruir
			*/

			destroyView(pos) {
				
				// el metodo splice elimina completamente un elemento y
				// reorganiza el array
				// el primer parametro es la posicion y el segundo el 
				// numero de elementos a borrar
				this.destroyMobile(pos);

				console.log("index to destroy",pos);

			    // actualizar el counter de los moviles
				this.phoneCounter--;
				
			},

			checkGb(x) {

				if (this.$store.state.internetPrice) {
					return x.gb + x.bonus_gb;
				}
				return x.gb;
			},

			/**
			* @ param int price
			* @ return int
			* devuelve el precio con o sin descuento segun 
			* si tenemos fibra o no en el paquete
			*/
			getMobilePrice(obj) {

			if (this.$store.state.internetPrice) {
				// tenemos la fibra seleccionada

				return obj.bonus_price;
			}

			return obj.price;
			},

			/**
			* @param int index
			* funcion que actualiza el valor de selectedMobileIndex
			* que se pasa como parametro al compontente ModalTarifas
			*/

			setSelectedMobileIndex(index) {

				this.selectedMobileIndex = index;

			},

			...mapMutations([
				// map `this.incrementVoicePrice()` to `this.$store.commit('incrementVoicePrice')`,
			    'addNewMobile',
			    'destroyMobile',
			    'resetMobilePrice',
			    'getMobilesColectionLength',
			    'resetMobilesColection',

			]),

		},
	}
</script>