<template>
	<div class="row">
		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" 
				aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Siente la magia de Digi</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="col-md-12">
							<h3 class="blue text-center">Con llamadas internacionales y megas</h3>
						</div>
						<div class="row">
							<div class="col-md col-6 col-sm-6">
								<button class="btn btn-block combo5 modal-button"
										@click="sendSelectedPrice(combo5,'combo5')">

									<span class="fas fa-check-circle green"
										v-show="checkedBtn == combo5.name"></span>

									<span class="white">
										{{ combo5.minutes.shortDesc }} +  {{ combo5.gb }}GB
										<br/> <strong>{{ combo5.price }}€</strong>
									</span>
								
								</button>
							</div>
							<div class="col-md col-6 col-sm-6">
								<button  class="btn btn-block combo10 modal-button"
										 @click="sendSelectedPrice(combo10,'combo10')">

									<span class="fas fa-check-circle green"
										v-show="checkedBtn == combo10.name"></span>

									<span class="white">
											{{ combo10.minutes.shortDesc }} + {{ combo10.gb }}GB
											<br/><strong> {{ combo10.price }}€</strong>
									</span>
								</button>
							</div>

							<div class="col-md col-6 col-sm-6">
								<button class="btn btn-block combo15 modal-button"
										@click="sendSelectedPrice(combo15, 'combo15')">

									<span class="fas fa-check-circle green"
										v-show="checkedBtn == combo15.name"></span>	

									<span class="text-center white">
										{{ combo15.minutes.shortDesc }} + {{ combo15.gb }}GB
										</br><strong>{{ combo15.price }}€</strong>
									</span>
								</button>
							</div>

							<div class="col-md col-6 col-sm-6">
								<button class="btn btn-block combo20 modal-button" 
										@click="sendSelectedPrice(combo20,'combo20')">

									<span class="fas fa-check-circle green"
										v-show="checkedBtn == combo20.name"></span>

									<span class="text-center white">
											{{ combo20.minutes.shortDesc }} + {{ combo20.gb }}GB
										</br><strong>{{ combo20.price }}€</strong>
									</span>
								</button>
							</div>
						</div>
						<div class="h-60"></div>

						<!-- ILIMITADOS -->

						<div class="col-md-12">
							<h3 class="blue text-center">Con llamadas nacionales y megas</h3>
						</div>
						<div class="row">
							<div class="col-md col-6 col-sm-6">
								<button class="btn btn-block ilimitado modal-button"
										@click="sendSelectedPrice(mini,'ilimitado')">

									<span class="fas fa-check-circle green"
										v-show="checkedBtn == mini.name"></span>

									<span class="text-center white">
										{{ mini.minutes.shortDesc }} + {{ mini.gb }}GB
									</br><strong>{{ mini.price }}€</strong>
									</span>
								</button>
							</div>
							<div class="col-md col-6 col-sm-6">
								<button class="btn btn-block ilimitado modal-button"
										@click="sendSelectedPrice(ilimitado10,'ilimitado')">

									<span class="fas fa-check-circle green"
										v-show="checkedBtn == ilimitado10.name"></span>
									
									<span class="text-center white">
										{{ ilimitado10.minutes.shortDesc }} + {{ ilimitado10.gb }}GB
										<br/><strong>{{ ilimitado10.price }}€</strong>
									</span>
								</button>
							</div>
							<div class="col-md col-6 col-sm-6">
								<button class="btn btn-block ilimitado modal-button"
										 @click="sendSelectedPrice(ilimitado15, 'ilimitado')">
									<span class="fas fa-check-circle green"
										v-show="checkedBtn == ilimitado15.name"></span>

									<span class="text-center white">
											{{ ilimitado15.minutes.shortDesc }} + {{ ilimitado15.gb }}GB
										</br><strong>{{ ilimitado15.price }}€</strong>
									</span>
								</button>
							</div>

							<div class="col-md col-6 col-sm-6">
								<button class="btn btn-block ilimitado modal-button"
										@click="sendSelectedPrice(ilimitado20, 'ilimitado')">

									<span class="fas fa-check-circle green"
										v-show="checkedBtn == ilimitado20.name"></span>

									<span class="text-center white">
										{{ ilimitado20.minutes.shortDesc }} + {{ ilimitado20.gb }}GB
									</br><strong>{{ ilimitado20.price }}€</strong>
									</span>
								</button>
							</div>
						</div><!-- fin ilimitado -->

						<div class="h-60"></div>

						<div class="col-md-12">
							<h3 class="blue w-300 text-center">Para los que solo quieren navegar</h3>
						</div>
						<div class="row">
							<div class="col-md col-6 col-sm-6">
								<button class="btn btn-block navega modal-button"
										@click="sendSelectedPrice(navega5, 'navega')">

									<span class="fas fa-check-circle yellow"
										v-show="checkedBtn == navega5.name"></span>

									<span class="text-center white">
										  {{ navega5.minutes.shortDesc }} + {{ navega5.gb }}GB
										  </br><strong>{{ navega5.price }}€</strong>
									</span>
								</button>
							</div>
							<div class="col-md col-6 col-sm-6">
								<button class="btn btn-block navega modal-button"
										@click="sendSelectedPrice(navega10, 'navega')">

									<span class="fas fa-check-circle yellow"
										v-show="checkedBtn == navega10.name"></span>

									<span class="text-center white">
										{{ navega10.minutes.shortDesc }} + {{ navega10.gb }}GB
									</br><strong>{{ navega10.price }}€</strong>
									</span>
								</button>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
						
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

export default{

	props: ['selectedMobileIndex'],
	mixins: [productMixin], // lista de precios centralizada
	data() {
		return {
			btnArray: [false,false,false,false],  // array con los 4 moviles
			selectedBtnName: '',				  // nombre de la tarifa seleccionada					
		}
	},

	methods: {

		/**
		* @param object selectedProductObj, es un objeto sacado de productMixin
		* 
		*/

		sendSelectedPrice(selectedProductObj, divColorClass) {
			// acutualizo el precio en PriceComponent mediante eventBus
			// se pasa un array con el index del movil actualizado y 
			// los detalles de la tarifa seleccionada como objeto
			// añado al objeto el color del div
			var o = selectedProductObj;
			o.divColor = divColorClass;
			var i = [this.selectedMobileIndex, o];

			this.updateMobile(i);
			
			// incrementamos el precio de los moviles
			this.incrementMobilePrice(o.price);

			// marcamos el div seleccionado con un icono verde
			this.btnArray[this.selectedMobileIndex] = selectedProductObj.name;
			this.selectedBtnName = selectedProductObj.name;

			
		},

		...mapMutations([
			// map `this.incrementVoicePrice()` to `this.$store.commit('incrementVoicePrice')`,
		    'updateMobile',
		    'incrementMobilePrice'
		    ])

		
	},

	/**
	* @return string selectedBtnName, el nombre de la tarifa seleccionada
	* escucha los cambios en el btnArray
	*/
	computed: {
		checkedBtn: function() {
			this.selectedBtnName = this.btnArray[this.selectedMobileIndex];
			return this.selectedBtnName;
		}
	}
}

</script>