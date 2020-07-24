<template>
	<div class="modal fade" id="faqModal" tabindex="-1" role="dialog" 
					aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Todo sobre los Combos de Digi Mobil</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div id="accordion">
						<div class="card">
							<div class="card-header" id="headingOne">
								<h4 class="mb-0">
									<button class="col-xs-12 btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
										¿Tiene buena covertura Digi Mobil?
									</button>
								</h4>
							</div>

							<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" 
								data-parent="#accordion">
								<div class="card-body">
									Digi funciona sobre la red de Movistar. Aprovecha la mejor covertura de 
									España para hablar y navegar con la velocidad 4G.
								</div>
							</div>
						</div>

						<div class="card">
							<div class="card-header" id="headingSeven">
								<h5 class="mb-0">
									<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
										¿Como se activan los bonos Digi?
									</button>
								</h5>
							</div>
							<div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
								<div class="card-body">
									<p>Puedes activar cualquier bono Digi marcando <span class="blue">
									*100#</span> en tu movil, entrando en <a href="https://micuentadigi.digimobil.es"> 
									Mi Cuenta Digi</a> o en cualquier <span class="blue">distribuidor Digi Mobil</span>.</p>
								</div>
							</div>
						</div>

						<div class="card">
							<div class="card-header" id="headingTwo">
								<h5 class="mb-0">
									<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										¿Se acumulan los megas y los minutos?
									</button>
								</h5>
							</div>
							<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" 
							data-parent="#accordion">
								<div class="card-body">
									<p>Si, los megas sin gastar de cualquier <span class="blue">Digi Combo</span>, 
										<span class="blue">Digi Naveg@</span>, <span class="blue">Mini</span> o 
										<span class="blue">Digi Ilimitado</span> o <span class="blue">contrato</span> se acumulan de forma automatica para el mes siguiente al activar cualquier producto Digi Mobil.</p>
										<p>Los minutos y los SMS no se acumulan para el mes siguiente y no son
										reembolsables.</p>
										<p>Si tienes contrato Digi, los megas sin gastar se te acumulan de forma
											automatica el dia 16 de cada mes. Disfrutaras de los megas acumulados el 
											siguiente ciclo de facturacion.</p>
								</div>
							</div>
						</div>

						<div class="card">
							<div class="card-header" id="headingThree">
								<h5 class="mb-0">
									<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										¿Y si no tengo saldo para la auto-renovacion?
									</button>
								</h5>
							</div>
							<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
								<div class="card-body">
									<p>Si no tenias suficiente saldo para la renovacion automatica de tu bono Digi no te preocupes. </p>
									<p>Tienes <span class="blue">48 horas</span> desde el vencimiento de tu 
									actual producto para activar cualquier producto Digi, de esta manera los megas sin gastar del mes anterior se acumularan para el mes siquiente.</p>
								</div>
							</div>
						</div>

						<div class="card">
							<div class="card-header" id="headingFour">
								<h5 class="mb-0">
									<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
										¿Has terminado los megas y el mes no ha pasado?
									</button>
								</h5>
							</div>
							<div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
								<div class="card-body">
									<p>Todos los productos Digi incluyen una cantidad de megas a baja velocidad 
									    para sequir navegando si has gastados todos tus megas de maxima velocidad.</p>
									<p>Si has acabado los megas a maxima velocidad tienes varias opciones:</p>
										<ul>
											<li>Activar otra vez un bono Digi.</li>
											<li>Aumentar megas extra. Puedes aumentar 200MB o 1GB extra.
											<li>Seguir navegando a baja velocidad.</li>
										</ul> 
									<p>Los megas extra que no hayas gastado se acumulan para el proximo mes.</p>
								</div>
							</div>
						</div>

						<div class="card">
							<div class="card-header" id="headingFive">
								<h5 class="mb-0">
									<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										¿Como verifico el saldo?
									</button>
								</h5>
							</div>
							<div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
								<div class="card-body">
									<p>El saldo de megas y minutos lo puedes comprobar marcando <span class="blue">
									*134#</span> en tu movil.</p>
								</div>
							</div>
						</div>

						<div class="card">
							<div class="card-header" id="headingSix">
								<h5 class="mb-0">
									<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
										¿Puedo activar mas de un bono?
									</button>
								</h5>
							</div>
							<div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
								<div class="card-body">
									<p>Si. Se pueden activar hasta 3 bonos distintos en los 30 dias siquientes a 
										la fecha de la primera activacion. Cada bono caduca a los 
										30 dias desde su activacion.
										<p> Los minutos y los megas de los distintos bonos que se encuentran activos 
										en un momento dado se suman.</p>
								</div>
							</div>
						</div>
						
					</div>

				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Entendido</button>
				</div>
			</div>
		</div>
	</div>
</template>