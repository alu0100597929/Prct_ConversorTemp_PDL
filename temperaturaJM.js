"use strict"; /* Use ECMAScript 5 strict mode in browsers that support it */

function convertir()
{
   var resultado;
   var tempEntrada = document.getElementById("tempEntrada");   /*/etElementId recibe como argumento el ID que se especifica en el index.html*/
   tempEntrada = tempEntrada.value;
   
   var regexp = /^([+-]?\d+(\.\d*)?)\s?([cfCF])$/
   var tempCorrecta = regexp.test(tempEntrada);  /*test devuelve true si la cadena coincide con la exp reg*/
   
   if(tempCorrecta == true)
   {
        var matrizTemp = tempEntrada.match(regexp);   /*Si la cadena coincide con regexp, crea una matriz con el valor de la cadena y las partes entre parentesis de la regexp*/
        var temp = matrizTemp[1];
        var unidad = matrizTemp[3];
        
        temp = parseFloat(temp);                    /*Convierte la cadena en float*/
        
        if(unidad == 'c' || unidad == 'C')
        {
           resultado = (temp * 9/5)+32;
           tempSalida.innerHTML = resultado + " F";
        }
        else
        {
            resultado = (temp - 32)*5/9;
            tempSalida.innerHTML = resultado + " C";
        }

   }
   else
   {
     tempSalida.innerHTML = "ERROR. Temperatura escrita incorrectamente."
   }
   
}



/*
NOTA: el array creado por el metodo match para la cadena "-25.10C" es [-25.10C, -25.10, .10, C]
*/
