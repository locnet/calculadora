
<template>
    <!-- Vue component MainMenu -->
         
    <div class="container" >
        <div class="row portada">
            <div class="col-12  my-auto">
                <h1 class="text-center white">CONTRATA DIGI </h1>
                <h1 class="text-center yellow">¡EL AHORRO ES BRUTAL!</h1>
                <h1 class="text-center white">91 87 00 693</h1>
                <h1 class="text-center">
                    <a href="#calculadora" class="align-center">
                        <button class="btn btn-warning btn-lg">
                            CALCULA LO QUE PAGARAS CON DIGI
                        </button>
                    </a>
                </h1>
            </div>
        </div>
        <div class="row" id="calculadora">
            <div class="col-12 col-sm-12 col-md-8 pb-5 pt-5 mt-5">
                <!-- componente calculadora -->
                <app-fibra></app-fibra>

                <div class="h-20"></div>

                <app-movil></app-movil>
            </div>
            <div class="col-12 col-sm-12 col-md-4">
                <app-price-component
                :totalPrice="totalPrice"></app-price-component>
            </div>
        </div>

    </div>    

</template>

<script>

export default {
    data() {
        return {
          totalPrice: this.$store.state.totalPrice,
        }
    },

    methods: {

    },
    created() {

    }
}
// smoth scroll
var scroll = new SmoothScroll('a[href*="#"]',{
        speed:1000,
    });
</script>