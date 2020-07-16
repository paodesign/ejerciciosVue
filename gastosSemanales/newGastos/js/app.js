class Gasto {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = parseFloat(cantidad);
    }
}

new Vue({
    el: "#app",
    data: {
        //form
        gasto: "",
        cantidad: "",
        lista: [],
        presupuesto: 0,
        restante: 0,
        mostrarMsj: false
    },
    methods: {
        agregado: function () {
            let gasto = new Gasto(this.gasto, this.cantidad);
            this.lista.push(gasto);
            this.gasto = "";
            this.cantidad = "";
            this.mostrarMsj = true;
            setTimeout(()=> {
                this.mostrarMsj= false
            },3000)
        }
    },
    computed : {
        obtenerResante: function () {
            let cb = (total, gasto) => total + gasto.cantidad;
            let totalGtos = this.lista.reduce(cb,0);
            this.restante = this.presupuesto - totalGtos;
            return this.restante;
        },
        avisoClase: function(){
            return {
                'alert-danger': this.presupuesto/4> this.restante,
                'alert-success': this.presupuesto/2<= this.restante,
                'alert-warning': this.presupuesto/2> this.restante && this.presupuesto/4<= this.restante
            }
        }
    },
    created: function () {
        while (this.presupuesto === 0) {
            let respuesta = prompt("Cuál es el presupuesto semanal?");
            if (!isNaN(parseFloat(respuesta))) {
                this.presupuesto = Number.parseFloat(respuesta);
            }
        }
    }
})
