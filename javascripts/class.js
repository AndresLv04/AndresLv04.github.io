class expresiones {

    areaCuadrado(){
        let lado = document.getElementById("input_ejercicio1").value;
        let areaTotal = lado * lado;
        document.getElementById("input_resultado1").innerHTML = areaTotal;
    }

    areaCirculo(){
        const PI = 3.1416;
        let radio = document.getElementById("input_ejercicio2").value;
        let areaTotal = PI*Math.pow(radio,2);
        document.getElementById("input_resultado2").innerHTML = areaTotal.toFixed(3);
    }

    grados(){

        if (document.getElementById("tipo_option").value == "CaF") {
            let gC = document.getElementById("input_ejercicio3").value;
            let convertirG = ((9/5) * gC) + 32;
            document.getElementById("input_resultado3").innerHTML = convertirG + " grados °F";
        }if (document.getElementById("tipo_option").value == "FaC") {
            let gF = document.getElementById("input_ejercicio3").value;
            let convertirF = (gF - 32)/(9/5);
            document.getElementById("input_resultado3").innerHTML = convertirF.toFixed(3) + " grados °C"
        } else {
            
        }
    }

    salario(){

        /**
             * las deducciones:
             * Aporte a la salud 4%
             * Aporte a la pensión 4%
             * Retención de fuente 3%
             */
    
        const deducciones = 0.11;
        var deduSalario = 0;
        var comisión = 0;
        var tiempoTrabajo = document.getElementById("tiempoTrabajo").value;
        var ventas = document.getElementById("input_ventas").value;
    
    
    
        if( tiempoTrabajo == "meDosAnos"){
            const salario2Anos = 900000;
            
            deduSalario = salario2Anos * deducciones;
        
            comisión = 5000 * ventas;
            let salNeto2Ano = (salario2Anos - deduSalario) + comisión;
    
            document.getElementById("input_salarioBruto").innerHTML = salario2Anos;
            document.getElementById("input_resultado4").innerHTML = salNeto2Ano;
    
        }else if(tiempoTrabajo == "meCuaAnos"){
            const salario4Anos = 1500000;
        
            deduSalario = salario4Anos * deducciones;
    
            comisión = 7000 * ventas;
            let salNeto4Ano = (salario4Anos - deduSalario) + comisión;
    
            document.getElementById("input_salarioBruto").innerHTML = salario4Anos;
            document.getElementById("input_resultado4").innerHTML = salNeto4Ano;
    
        }else{
            const salario5Anos = 2850000;
    
            deduSalario = salario5Anos * deducciones;
            comisión = 10000 * ventas;
            let salNeto5Ano = (salario5Anos - deduSalario) + comisión;
    
            document.getElementById("input_salarioBruto").innerHTML = salario5Anos;
            document.getElementById("input_resultado4").innerHTML = salNeto5Ano;
        }
    }

    conversion(){
        const dolar = 4029;
        const euro = 4462.24;
        let pesos = document.getElementById("input_ejercicio5").value;
        
        let dolares = pesos / dolar;
        let euros = pesos / euro;
    
        document.getElementById("input_dolares").innerHTML = dolares.toFixed(2) + " dolares";
        document.getElementById("input_euros").innerHTML = euros.toFixed(2) + " euros";
    }
}

var ejercicioExpresiones = new expresiones();