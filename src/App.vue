
<template>
    <!-- Vue component MainMenu -->
         
    <div class="container" >
        <div class="h-60"></div>
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