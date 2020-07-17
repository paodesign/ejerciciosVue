class Seguro {
    constructor(marca, anio, tipo) {
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }
}
new Vue({
    el: "#app",
    data: {
      marcas:[
        { id:1, nombre: "Americano" },
        { id:2, nombre: "Asiatico" },
        { id:3, nombre: "Europeo" }
    ],
    marcaSeleccionada: null,
    anioSelec:"2020"


    },
    methods: {
       
    },
    computed: {
        generarAnio: function () {
            let listaAnios= [];
            const max = new Date().getFullYear();
            const min = max - 20;
            for(let i = max; i!=min -1; i--){
                listaAnios.push(i);
            }
            return listaAnios;

        }
    }
    
})