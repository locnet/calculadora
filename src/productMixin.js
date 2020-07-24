/**
|----------------------------------------|
|         LISTA PRECIOS CENTRALIZADA     |
|----------------------------------------|
*/
    
export const productMixin = {
	/*
	* 
	* los mixins se ejecutan antes que los componentes
	*/

	data() {
        return {
            fibra500: {
            	name: 'Fibra 500Mb',
				price: 30,
				minutes: '',
				gb: '500Mb/s'
			},

		    fibra50: {
		    	name: 'Fibra 50Mb',
		    	price: 25,
		    	minutes: '',
		    	gb: '50Mb/s'

		    },

		    fijoSinLlamadas: {
		    	name: 'Fijo sin llamadas',
		    	price: 1,
		    	minutes: 'Sin llamadas incluidas',
		    	gb: ''
		    },

		    fijoConLlamadas: {
		    	name: 'Fijo ilimitado',
		    	price: 5,
		    	minutes: 'Llamadas ilimitadas a fijos y moviles nacionales.',
		    	gb: ''
		    },

		    combo5: {
		    	name: 'Combo 5',
		    	price: 5,
		    	minutes: "100",
		    	gb: 1.5
		    },

		    combo10: {
		    	name: 'Combo 10',
		    	price: 10,
		    	minutes: "400",
		    	gb: 5
		    },

		    combo15: {
		    	name: 'Combo 15',
		    	price: 15,
		    	minutes: "800",
		    	gb: 12
		    },

		    combo20: {
		    	name: 'Combo 20',
		    	price: 20,
		    	minutes: "2000",
		    	gb: 30
		    },

		    mini: {
		    	name: 'Mini',
		    	price: 3,
		    	minutes: 100,
		    	gb: 0.5
		    },

		    ilimitado10: {
		    	name: 'Ilimitado 10',
		    	price: 10,
		    	minutes: "Ilimitado",
		    	gb: 5
		    },

		    ilimitado15: {
		    	name: 'Ilimitado 15',
		    	price: 15,
		    	minutes: "Ilimitado",
		    	gb: 12
		    },

		    ilimitado20: {
		    	name: 'Ilimitado 20',
		    	price: 20,
		    	minutes: "Ilimitado",
		    	gb: 30
		    },

		    navega5: {
		    	name: 'Navega 3Gb',
		    	price: 5,
		    	minutes: '',
		    	gb: 3
		    },

		    navega10: {
		    	name: 'Navega 6Gb',
		    	price: 10,
		    	minutes: "",
		    	gb: 6
		    },

		    
		    discount: 0.4
        }
    },
        
    computed: {
        
    }
}