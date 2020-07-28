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
				minutes: {
					shortDesc: '500mb/s',
					largeDesc: 'Velocidad simetrica: 500mb/s de subida y bajada'
				},
				gb: '500Mb/s'
			},

		    fibra50: {
		    	name: 'Fibra 50Mb',
		    	price: 25,
		    	minutes:  {
					shortDesc: '50mb/s',
					largeDesc: 'Velocidad simetrica: 50mb/s de subida y bajada'
				},
		    	gb: '50Mb/s'

		    },

		    fijoSinLlamadas: {
		    	name: 'Fijo sin llamadas',
		    	price: 1,
		    	minutes: {
		    		shortDesc: 'Sin llamadas',
		    		largeDesc: 'Sin llamadas incluidas',
		    	},
		    	gb: ''
		    },

		    fijoConLlamadas: {
		    	name: 'Fijo ilimitado',
		    	price: 5,
		    	minutes: {
		    		shortDesc: 'Ilimitadas',
		    		largeDesc: 'Llamadas ilimitadas a fijos y moviles nacionales.'
		    	},
		    	gb: ''
		    },

		    combo5: {
		    	name: 'Combo 5',
		    	price: 5,
		    	minutes: {
		    		shortDesc: "100 min",
		    		largeDesc: "100 minutos internacionales"
		    	},
		    	gb: 1.5
		    },

		    combo10: {
		    	name: 'Combo 10',
		    	price: 10,
		    	minutes: {
		    		shortDesc: "400 min",
		    		largeDesc: "400 minutos internacionales"
		    	},
		    	gb: 5
		    },

		    combo15: {
		    	name: 'Combo 15',
		    	price: 15,
		    	minutes: {
		    		shortDesc: "800 min",
		    		largeDesc: "800 minutos internacionales"
		    	},
		    	gb: 12
		    },

		    combo20: {
		    	name: 'Combo 20',
		    	price: 20,
		    	minutes: {
		    		shortDesc: "2000 min",
		    		largeDesc: "2000 minutos internacionales"
		    	},
		    	gb: 30
		    },

		    mini: {
		    	name: 'Mini',
		    	price: 3,
		    	minutes: {
		    		shortDesc: "100 min",
		    		largeDesc: "100 minutos nacionales"
		    	},
		    	gb: 0.5
		    },

		    ilimitado10: {
		    	name: 'Ilimitado 10',
		    	price: 10,
		    	minutes: {
		    		shortDesc: "Ilimitado",
		    		largeDesc: "Llamadas nacionales ilimitadas"
		    	},
		    	gb: 5
		    },

		    ilimitado15: {
		    	name: 'Ilimitado 15',
		    	price: 15,
		    	minutes: {
		    		shortDesc: "Ilimitado",
		    		largeDesc: "Llamadas nacionales ilimitadas"
		    	},
		    	gb: 12
		    },

		    ilimitado20: {
		    	name: 'Ilimitado 20',
		    	price: 20,
		    	minutes: {
		    		shortDesc: "Ilimitado",
		    		largeDesc: "Llamadas nacionales ilimitadas"
		    	},
		    	gb: 30
		    },

		    navega5: {
		    	name: 'Navega 3Gb',
		    	price: 5,
		    	minutes: {
		    		shortDesc: 'Sin min',
		    		largeDesc: 'Solo llamadas ilimtadas de Digi a Digi'
		    	},		    		
		    	gb: 3
		    },

		    navega10: {
		    	name: 'Navega 6Gb',
		    	price: 10,
		    	minutes: {
		    		shortDesc: 'Sin min',
		    		largeDesc: 'Solo llamadas ilimtadas de Digi a Digi'
		    	},
		    	gb: 6
		    },

		    
		    discount: 0.4
        }
    },
        
    computed: {
        
    }
}