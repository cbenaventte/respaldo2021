/*alert("Estoy ejecutando la función alert");
console.log("Estoy ejecutando la función console.log");*/

/*
3 + 4
x = 3 + 4
x
y = x
y
y = y+y
y
x
z = "Hola"
z = z + y
console.log(z);
alert(z);
*/

/*var texto = "Estoy escribiendo un texto con \n salto de línea"
alert(texto);
*/
/*
var valor1 = 2;
var valor2 = 5;
valor1 = valor2;
alert(valor1);
*/
/*
var dividendo = 8;
var divisor = 4;
var total_modulo = dividendo % divisor;
alert(total_modulo);
*/
var nombre = prompt("Hola, coloque su nombre por favor", "Nombre por defecto");
        alert("Hola, nos alegra que estés por aquí " + nombre);
        document.write("<h1 id='color_letra'>Estoy aprendiendo JavaScript</h1>");
        var dividendo = prompt("Hola, coloque un número dividendo ", "10");
        var divisor = prompt("Hola, coloque un número divisor ", "2");
        var color = prompt("Hola, escoja también un color de los colores por nombre de CSS \n Ejemplo: blue, yellow, green, red, etc...", "blue");
        dividendo = parseInt(dividendo);
        divisor = parseInt(divisor);
        total_divi = dividendo / divisor;
        total_modulo = dividendo % divisor;
        document.write("La division entre los dos números es " + total_divi + " y su módulo es " + total_modulo + ".");
        document.write("Además escogiste el color " + color + " lo cual cambia de color de letra al contenido de la etiqueta H1");
        document.getElementById("color_letra").style.color = color;