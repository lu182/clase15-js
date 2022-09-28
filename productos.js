console.clear();

        /*FORMA LARGA:*/
        /*
        function totalProductos(valorProd1, valorProd2, valorProd3, valorProd4, valorProd5){
            const totalProductos = valorProd1 + valorProd2 + valorProd3 + valorProd4 + valorProd5;
            alert('El valor total de los Productos es de $' + totalProductos);
        }

        let num1 = Number(prompt('Ingrese el valor del primer producto'));
        let num2 = Number(prompt('Ingrese el valor del segundo producto'));
        let num3 = Number(prompt('Ingrese el valor del tercer producto'));
        let num4 = Number(prompt('Ingrese el valor del cuarto producto'));
        let num5 = Number(prompt('Ingrese el valor del quinto producto'));

        totalProductos(num1, num2, num3, num4, num5);
        */


        /*FORMA CORTA:*/
        const productos = 5;
        let sumando;
        let total = 0;

        function totalProductos(){
            for (let i = 0; i < productos; i++) {
                sumando = Number(prompt('Ingrese el valor de cada Producto: '));
                total = total + sumando;
            }
            alert('El valor total de los Productos es de $' + total);
        }

        totalProductos()