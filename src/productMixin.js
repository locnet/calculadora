/**
|----------------------------------------|
|         LISTA PRECIOS CENTRALIZADA     |
|----------------------------------------|
*/
    
export const productMixin = {
	/*
	* 
	* recuerda: los mixins se cargan antes que los componentes
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
		    	name: 'Fibra 100Mb',
		    	price: 25,
		    	minutes:  {
					shortDesc: '100mb/s',
					largeDesc: 'Velocidad simetrica: 100mb/s de subida y bajada'
				},
		    	gb: '100Mb/s'

		    },

		    fijoSinLlamadas: {
		    	name: 'Fijo sin llamadas',
		    	price: 1,
		    	minutes: {
		    		shortDesc: 'Solo a Digi',
		    		largeDesc: 'Sin llamadas nacionales / ilimitadas de Digi a Digi',
		    	},
		    	gb: ''
		    },

		    fijoConLlamadas: {
		    	name: 'Fijo ilimitado',
		    	price: 3,
		    	minutes: {
		    		shortDesc: 'Ilimitadas',
		    		largeDesc: 'Llamadas ilimitadas a fijos y moviles nacionales.'
		    	},
		    	gb: ''
		    },

		    combo5: {
		    	name: 'Combo 5',
		    	price: 5,
		    	bonus_price: 3,
		    	minutes: {
		    		shortDesc: "100 min",
		    		largeDesc: "100 minutos internacionales"
		    	},
		    	gb: 3,
		    	bonus_gb: 1,
		    },

		    combo10: {
		    	name: 'Combo 10',
		    	price: 10,
		    	bonus_price: 6,
		    	minutes: {
		    		shortDesc: "400 min",
		    		largeDesc: "400 minutos internacionales"
		    	},
		    	gb: 10,
		    	bonus_gb: 2
		    },

		    combo15: {
		    	name: 'Combo 15',
		    	price: 15,
		    	bonus_price: 9,
		    	minutes: {
		    		shortDesc: "800 min",
		    		largeDesc: "800 minutos internacionales"
		    	},
		    	gb: 20,
		    	bonus_gb: 4
		    },

		    combo20: {
		    	name: 'Combo 20',
		    	price: 20,
		    	bonus_price: 12,
		    	minutes: {
		    		shortDesc: "2000 min",
		    		largeDesc: "2000 minutos internacionales"
		    	},
		    	gb: 40,
		    	bonus_gb: 20
		    },

		    mini: {
		    	name: 'Mini',
		    	price: 3,
		    	bonus_price: 2,
		    	minutes: {
		    		shortDesc: "100 min",
		    		largeDesc: "100 minutos nacionales"
		    	},
		    	gb: 1,
		    	bonus_gb: 1
		    },

		    ilimitado7: {
		    	name: 'Ilimitado 7',
		    	price: 7,
		    	bonus_price:5,
		    	minutes: {
		    		shortDesc: "Ilimitado",
		    		largeDesc: "Llamadas nacionales ilimitadas"
		    	},
		    	gb: 5,
		    	bonus_gb: 1
		    },

		    ilimitado10: {
		    	name: 'Ilimitado 10',
		    	price: 10,
		    	bonus_price: 6,
		    	minutes: {
		    		shortDesc: "Ilimitado",
		    		largeDesc: "Llamadas nacionales ilimitadas"
		    	},
		    	gb: 10,
		    	bonus_gb: 2
		    },

		    ilimitado15: {
		    	name: 'Ilimitado 15',
		    	price: 15,
		    	bonus_price: 9,
		    	minutes: {
		    		shortDesc: "Ilimitado",
		    		largeDesc: "Llamadas nacionales ilimitadas"
		    	},
		    	gb: 20,
		    	bonus_gb: 4
		    },

		    ilimitado20: {
		    	name: 'Ilimitado 20',
		    	price: 20,
		    	bonus_price: 12,
		    	minutes: {
		    		shortDesc: "Ilimitado",
		    		largeDesc: "Llamadas nacionales ilimitadas"
		    	},
		    	gb: 40,
		    	bonus_gb: 20
		    },

		    // en la ultima actualizacion de precio los Navega han desaparecido
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
		    // el descuento con la fibra es de 40% en este momento
		    // pero podria cambiar
		    
		    discount: 0.4
        }
    },
        
    computed: {
        
    }
}