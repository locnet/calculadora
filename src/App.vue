
<template>
    <!-- Vue component MainMenu -->
         
    <div class="container" >
        <div class="col-12 pt-3 pb-3">
          <h4 class="blue text-center">Tienda Digi Arganda: 91 87 00 693</h4>
        </div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-8">
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

</script>