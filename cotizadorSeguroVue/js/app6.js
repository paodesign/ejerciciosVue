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
        marcas: [
            { id: 1, nombre: "Americano", cotizar: 1.15 },
            { id: 2, nombre: "Asiatico", cotizar: 1.05 },
            { id: 3, nombre: "Europeo", cotizar: 1.35 }
        ],
        marcaSeleccionada: null,
        anioSelec: "2020",
        tipoSelec: null,
        precioCotizado: "",
        mostrarSpinner: false,
        mostrarResultdo: false


    },
    methods: {

        cotizarSeguro: function () {
            this.mostrarSpinner = true;
            setTimeout(() => {
                this.mostrarSpinner = false;
                let base = 2000;
                switch (this.marcaSeleccionada.nombre) {
                    case "Americano":
                        this.precioCotizado = base * this.marcaSeleccionada.cotizar;
                        break;
                    case "Asiatico":
                        this.precioCotizado = base * this.marcaSeleccionada.cotizar;
                        break;
                    case "Europeo":
                        this.precioCotizado = base * this.marcaSeleccionada.cotizar;
                        break;
                }
                if(this.tipoSelec === "Básico"){
                    this.precioCotizado *= 1.3;
                }else {
                    this.precioCotizado *= 1.5;
                };
                let diferencia = new Date().getFullYear() - this.anioSelec;
                this.precioCotizado -= ((diferencia * 3)* this.precioCotizado)/100;

            }, 3000);
            setTimeout(()=>{
                this.precioCotizado ="";
            },10000)
        }
    },
    computed: {
        generarAnio: function () {
            let listaAnios = [];
            const max = new Date().getFullYear();
            const min = max - 20;
            for (let i = max; i != min - 1; i--) {
                listaAnios.push(i);
            }
            return listaAnios;
        }
    }

})