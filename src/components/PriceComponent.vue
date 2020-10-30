<template>

	<div class="col-12">
		<div class="h-30"></div>
		<p class="blue pointer">Mira lo que has elegido <i class="fas fa-angle-down blue"></i></p>
		<table class="table">
			<tbody>
				<tr  v-show="this.$store.state.internetPrice == 30">
					<td>
						<p>Fibra optica {{ fibra500.gb }}<br/>
							<span class="blue extra-small" style="padding-top:0px; margin-top: 0px">{{ fibra500.minutes.largeDesc }} </span>
						</p>
					</td>
					<td>
						<p class="blue w-600">{{ fibra500.price }}€ 
							<span class="extra-small">/mes</span> 
						</p>
					</td>
				</tr>
				<tr v-show="this.$store.state.internetPrice == 25">
					<td>
						<p >Fibra optica {{ fibra50.gb }} <br/>
							<span class="blue extra-small" style="padding-top:0px; margin-top: 0px">{{ fibra50.minutes.largeDesc }} </span> 
						</p>
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
							<span class="text-danger extra-small" style="padding-top:0px; margin-top: 0px">{{ fijoSinLlamadas.minutes.largeDesc }} </span>
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
						<p >Telefono fijo <br />
							<span class="blue extra-small" style="padding-top:0px; margin-top: 0px">{{ fijoConLlamadas.minutes.largeDesc }} </span>
						</p>						
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
							{{ checkGb(mobile) }}GB </span>
						</p>
						
					</td>

					<td v-show="mobile.price > 0">
						<p class="blue w-600">{{ getMobilePrice(mobile) }}€
							<span class="extra-small">/mes</span>
						</p>
					</td>
				</tr>

			</tbody>
		</table>		
		
		<h1 class="big d-none d-sm-none d-md-block d-xl-block d-lg-block">
			<span class="w-600">
				TOTAL {{ getTotalPrice() }} €</span><span class="small"> IVA incl.
			</span>
		</h1>
		<p class="blue" v-show="getTotalDiscount()  > 0"> Por tener la fibra en el pack te ahorras {{ getTotalDiscount() }} €/mes ( {{ getTotalDiscount() * 12 }} €/año).</p>
		<!-- separador solo para moviles -->
		<div class="d-md-none d-lg-none d-xl-none" style="min-height:60px"></div>
		<div class="col-12 col-sm-12 d-md-none d-lg-none d-xl-none fixed-bottom bgGrey pt-3">
			<h1 class="big text-center">
				<span class="white w-600">TOTAL {{ getTotalPrice() }} €</span><span class="white small"> IVA incl.</span>
			</h1>
		</div>
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

				return parseInt(obj.bonus_price);
			}

			return parseInt(obj.price);
			},

			/**
			* @return int
			* devuelve el precio total de los moviles incluidos en el paquete
			*/
			getTotalMobilePrice() {

				var mobilesPrice = 0;
				var l = [] = this.$store.state.mobilesColection;	
				
				for (var i = 0; i < l.length; i++) {
					
					mobilesPrice += parseInt(this.getMobilePrice(l[i]));
						
				}
				return mobilesPrice;
			},

			/**
			* @return int
			* @param none
			* calcula cuanto se ahora al mes en el precio de los moviles
			* si se contrata la fibra
			*/
			getTotalDiscount() {
				
				var x = 0;
				var t = 0;
				var l = [] = this.$store.state.mobilesColection;

				if (this.$store.state.internetPrice) {
					for (var i = 0; i < l.length; i++) {
						x += l[i].price - l[i].bonus_price;
							
					}
				}
				
				return x;
			}

		}
	}
</script>