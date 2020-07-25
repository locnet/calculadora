<template>

	<div class="col-12">
		<div class="h-30"></div>
		<p class="blue pointer">Mira lo que has elegido <i class="fas fa-angle-down blue"></i></p>
		<table class="table">
			<tbody>
				<tr  v-show="this.$store.state.internetPrice == 30">
					<td>
						<p>Fibra optica {{ fibra500.gb }}</p>
					</td>
					<td>
						<p class="blue w-600">{{ fibra500.price }}€ 
							<span class="extra-small">/mes</span> 
						</p>
					</td>
				</tr>
				<tr v-show="this.$store.state.internetPrice == 25">
					<td>
						<p >Fibra optica {{ fibra50.gb }} </p>
					</td>
					<td>
						<p class="blue w-600">{{ fibra50.price }}€
							<span class="extra-small">/mes</span>
						</p>
					</td>
				</tr>
				<tr v-show="this.$store.state.voicePrice == 1">
					<td>
						<p >Telefono fijo <br />
							<span class="text-danger extra-small" style="padding-top:0px; margin-top: 0px">{{ fijoSinLlamadas.minutes }} </span>
						</p>
						
					</td>
					<td>
						<p class="blue w-600">{{ this.$store.state.voicePrice }}€
							<span class="extra-small">/mes</span>
						</p>
					</td>
				</tr>

				<tr v-show="this.$store.state.voicePrice == 3 || this.$store.state.voicePrice == 5">
					<td>
						<p >Telefono fijo </p>						
					</td>
					<td>
						<p class="blue w-600">{{ this.$store.state.voicePrice }}€ 
							<span class="extra-small">/mes</span>
						</p>
					</td>
				</tr>

				<tr v-for="(mobile) in this.$store.state.mobilesColection">

					<td v-show="mobile.price > 0">
						
						<p> Movil {{ mobile.name }} <br />
							<span class="blue extra-small" style="padding-top:0px; margin-top: 0px">
							{{ mobile.minutes.largeDesc }} y
							{{ checkGb(mobile.gb) }}GB </span>
						</p>
						
					</td>

					<td v-show="mobile.price > 0">
						<p class="blue w-600">{{ getMobilePrice(mobile.price) }}€
							<span class="extra-small">/mes</span>
						</p>
					</td>
				</tr>

			</tbody>
		</table>
		</p>
		
		<h1 class="big">
			<span class="w-600">{{ getTotalPrice() }} €</span><span class="small"> IVA incl.</span>
		</h1>
		<p class="blue" v-show="this.$store.state.internetPrice > 0"> Por tener la fibra en el pack te ahorras {{ getTotalDiscount() }} euros.</p>
	</div>


</template>

<script>
	import { eventBus } from "../main";

	import { productMixin } from "../productMixin";

	import { mapMutations } from 'vuex';

	export default {

		mixins: [productMixin], // lista de precios centralizada

		props: {
			//totalPrice: Number,

		},

		data() {
			return {
				internetPrice: 0,
				phonePrice: 0,
				totalPrice: 0,
				totalDiscount: 0,
			};
		},

		methods: {
			...mapMutations([
			    'getMobilesColection', // map `this.getTotalPrice` to `this.$store.commit('getTotal')`

			     
			]),

			// devuelve el precio total
			getTotalPrice() {
				return this.$store.state.internetPrice + this.$store.state.voicePrice + this.getTotalMobilePrice();
			},

			/**
			* @param int x, los gigas
			* si el usuario a elegido una fibra se doblan los gigas 
			*/
			checkGb(x) {

				if (this.$store.state.internetPrice) {
					return 2*x;
				}
				return x;
			},

			/**
			* @ param int price
			* @ return int
			* devuelve el precio con o sin descuento segun 
			* si tenemos fibra o no en el paquete
			*/
			getMobilePrice(price) {
				if (this.$store.state.internetPrice) {
					// tenemos la fibra seleccionada

					if (price == 3) {
						// tengo la tarifa mini, el descuento no es exactamente
						// del 40%, estoy obligado ha hacer un apaño
						return 2;
					}

					return price - (price * this.discount);
				}

				return price;
			},

			/**
			* @return int
			* devuelve el precio total de los moviles incluidos en el paquete
			*/
			getTotalMobilePrice() {

				var mobilesPrice = 0;
				var l = [] = this.$store.state.mobilesColection;	
				
				for (var i = 0; i < l.length; i++) {
					
					mobilesPrice += this.getMobilePrice(l[i].price);
						
				}
				
				return mobilesPrice;
			},

			getTotalDiscount() {
				
				var x = 0;
				var t = 0;
				var l = [] = this.$store.state.mobilesColection;

				for (var i = 0; i < l.length; i++) {
					x += l[i].price;
						
				}
				t += x - this.getTotalMobilePrice();
				return t;
			}

		}
	}
</script>