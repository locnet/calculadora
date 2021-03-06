import Vue from 'vue';
import Vuex from 'vuex';
import { productMixin } from "../productMixin";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		totalPrice: 0,
		internetPrice: 0,
		voicePrice: 0,
		mobilePrice: 0,
		mobilesColection: [],
		mobilesColectionLength: 0
	}, 

	mutations: {
		setInternetPrice(state, price) {
			state.internetPrice = price;
		},

		resetInternetPrice (state) {
			state.internetPrice = 0;
		},

		setVoicePrice(state, price) {
			state.voicePrice = price;
		},

		resetVoicePrice (state) {
			state.voicePrice = 0;
		},

		addNewMobile (state, mobileObj) {
			// m es un objeto en formato 
			//{ name: '', price: '0',bonus_price, minutes:'', gb: '',bonus_gb, divColor: ''}
			state.mobilesColection.push(mobileObj);
		},

		updateMobile (state, mobArray) {
			// mobArray = [posicion para actualizar, objeto movil]
			var pos = mobArray[0];
			var obj = mobArray[1];

			// copio el array original
			var a = [] = state.mobilesColection;

			// limpio el array original
			state.mobilesColection = [];

			a[pos] = obj;

			state.mobilesColection = a;

			console.log('object',obj);
		},

		destroyMobile (state, pos) {
			// borra el movil con la posicion indicada
			state.mobilesColection.splice(pos,1);
		},
		
		getMobilesColection(state) {
			return state.mobilesColection;
		},

		incrementMobilePrice (state, amount) {
			state.mobilePrice += amount;
		},

		resetMobilePrice(state) {
			state.mobilePrice = 0;
		},

		resetMobilesColection(state) {
			state.mobilesColection = [];
		},

		getDiscountedPrice (state, price) {
			var p = 0;

			if (internetPrice > 0) {
				if ( price == 3) {
					// la tarifa mini cuesta 3 euros, con descuento es 2
					p = 2;
					return p;
				}

				p = price - (price * discount);
			}

			return p;			
		},

		// check the GB of every mobile price plan

		stateCheckGb(x) {

				if (internetPrice > 0) {

					if (x.name == "ilimitodo") {
						// tenemos un caso especial, los gigabites son ilimitados
						// asi que el valor devuelto no es tipo integer
						return x.gb;
					}

					return x.gb + x.bonus_gb;
				}

				return x.gb;
			}

	}
});	