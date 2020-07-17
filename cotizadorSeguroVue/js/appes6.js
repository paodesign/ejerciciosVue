//Constructor para seguro
class Seguro {
    constructor(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
    }
    cotizarSeguro(){
        /*
             1 = americano 1.15
             2 = asiatico 1.05
             3 = europeo 1.35
        */
         let cantidad;
         const base = 2000;
     
         switch(this.marca){
             case "1":
                 cantidad = base * 1.15;
                 break;
             case "2":
                 cantidad = base * 1.05;
                 break;
             case "3":
                     cantidad = base * 1.35;
                     break;
         }
     
         //Leer anio
         const diferencia = new Date().getFullYear() - this.anio;
         //Cada año de diferenccia hay que reducir un 3% en valor del seguro
         cantidad -= ((diferencia * 3)* cantidad) /100; 
     
         /*
             si el seguro es básico se múltiplica por 30% más
             si el seguro es completo se múltiplica por 50% más
         */
         if(this.tipo === "basico"){
             cantidad *= 1.30;
         }else{
             cantidad *= 1.50;
         }
        return cantidad;
     
     }
}

//todo lo qe se muestra
class Interfaz{
    //Mensaje que se imprime en HTML
    mostrarMensaje(mensaje, tipo){
        const div = document.createElement("div");
    
        if(tipo === "error"){
            //Agregamos clases
            div.classList.add("mensaje","error");
        }else{
            div.classList.add("mensaje","correcto");
        }
        //Insertamos el mensaje en el Html
        div.innerHTML = `${mensaje}`;
    
        //seleccionamos donde se inserta el mensaje
        formulario.insertBefore(div, document.querySelector(".form-group"));
    
        //Programamos el tiempo que va a mostrar el mensaje
        setTimeout(function(){
            document.querySelector(".mensaje").remove();
        }, 3000);
    }
    //Imprimir el resultado de la cotizacion
    mostrarResultado(seguro, total){
        const resultado = document.getElementById("resultado");
        let marca;
        switch(seguro.marca){
            case "1":
                marca = "Americano";
                break;
            case "2":
                marca = "Asiatico";
                break;
            case "3":
                marca = "Europeo";
                break;
        }
    //Crear div
    const div = document.createElement("div");
    //Insertar la informacion
    div.innerHTML = `
        <p class="header"> Tu resumen:</p>
        <p> Marca: ${marca};</p>
        <p> Año: ${seguro.anio};</p>
        <p> Tipo: ${seguro.tipo};</p>
        <p> Total: $ ${total.toFixed(2)};</p>
    `;
    const spinner = document.querySelector("#cargando img");
    spinner.style.display = "block"; 
    setTimeout(function(){
        spinner.style.display = "none";
        resultado.appendChild(div);
    }, 3000);
    
    }
}
 
//EventListener
const formulario = document.getElementById("cotizar-seguro");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    
    //Leer la marca seleccionada del select
    const marca = document.getElementById("marca");
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //Leer el año seleccionado del <select>
    const anio = document.getElementById("anio");
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    //Leer el valor del radio button
    const tipo = document.querySelector("input[name='tipo']:checked").value;

    //Crear instancia de interfaz
    const interfaz = new Interfaz();

    //Revisar que los campos no esten vacios
    if(marcaSeleccionada === "" || anioSeleccionado === "" || tipo === ""){
        //Interfaz imprime un error
        interfaz.mostrarMensaje("Faltan datos, revisa el formulario y prueba denuevo.", "error");
    }else {
        //Limpiar resultado anterior
        const resultados = document.querySelector("#resultado div");
        if(resultados != null){
            resultados.remove();
        }
        //Instanciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        //Cotizar el seguro
        const cantidad = seguro.cotizarSeguro(seguro);
        //Mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje("Cargando...", "correcto");
    }
});
//Crea el maximo y minimo que vamos a usar en los años
const max = new Date().getFullYear(),
      min = max - 20;

//genera los años
const selecAnios = document.getElementById("anio");
for(let i = max; i > min; i--){
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    selecAnios.appendChild(option);
}