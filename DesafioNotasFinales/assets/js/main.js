//Definimos nuestras variables
var nombre = prompt("Ingresa un Nombre: ", "Juan")
var apellido = prompt("Ingresa un Apellido: ", "Perez")
var carrera = prompt("Carrera: ", "Desarrollo Web")
var nota1HTML = prompt("Ingresa nota1 (del 1 al 7) [HTML]: ", "5")
var nota2HTML =prompt("Ingresa nota2 (del 1 al 7) [HTML]: ", "6")
var nota3HTML = prompt("Ingresa nota3 (del 1 al 7) [HTML]: ", "5")
var nota1CSS = prompt("Ingresa nota1 (del 1 al 7) [CSS]: ", "5")
var nota2CSS =prompt("Ingresa nota2 (del 1 al 7) [CSS]: ", "6")
var nota3CSS = prompt("Ingresa nota3 (del 1 al 7) [CSS]: ", "5")
var nota1jScript = prompt("Ingresa nota1 (del 1 al 7) [jScript]: ", "5")
var nota2jScript =prompt("Ingresa nota2 (del 1 al 7) [jScript]: ", "4")
var notaAprobacion =prompt("Ingresa de nota de aprobacion [jScript]: ", "4")
//calculo del promedio de notas
var promedioHTML = ((parseFloat(nota1HTML)+parseFloat(nota2HTML)+parseFloat(nota3HTML))/3)
var promedioCSS = ((parseFloat(nota1CSS)+parseFloat(nota2CSS)+parseFloat(nota3CSS))/3)
/*var promediojScript = (parseFloat(nota1jScript)+parseFloat(nota2jScript)+parseFloat(nota3jScript))/3;*/

//calculo de la nota faltante para que el promedio de nota 4
var nota3jScript = (3*parseFloat(notaAprobacion)-(parseFloat(nota1jScript)+parseFloat(nota2jScript)))

document.write("<div class='container'>");//Aquí creamos nuestro div contenedor
//imagen
document.write("<img src='https://desafiolatam.com/assets/home/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png' style='float:right'>");
document.write("<h1 'py-2'>Notas Finales</h1>")
document.write("<table class='table'>");//Aquí creamos nuestra tabla cabecera
/*document.write("<thead>")*/
document.write("<tr>")
document.write("<th scope='col'>Nombre</th>")
document.write("<td scope='col'>"+nombre+' ' +apellido+"</td>")
document.write("</tr>")
/*document.write("</thead>")*/
/*document.write("<thead>")*/
document.write("<tr>")
document.write("<th scope='col'>Carrera</th>")
document.write("<td scope='col'>"+carrera+"</td>")
document.write("</tr>")
/*document.write("</thead>")*/
document.write("</table>");

document.write("<table class='table'>");//aqui ingresamos segunda tabla con bootstrap
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");//Con tr definimos las columnas de la tabla

//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");



document.write("</tr");//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");//Aquí cerramos el encabezado de nuestra tabla

//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>HTML</th>");//sector del html
document.write("<td>"+nota1HTML+"</td>");
document.write("<td>"+nota2HTML+"</td>");
document.write("<td>"+nota3HTML+"</td>");
document.write("<td>"+promedioHTML.toFixed(2)+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th scope='row'>CSS</th>");//sector del CSS
document.write("<td>"+nota1CSS+"</td>");
document.write("<td>"+nota2CSS+"</td>");
document.write("<td>"+nota3CSS+"</td>");
document.write("<td>"+promedioCSS.toFixed(2)+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th scope='row'>jScript</th>");//sector del jScript
document.write("<td>"+nota1jScript+"</td>");
document.write("<td>"+nota2jScript+"</td>");
document.write("<td>--</td>");
document.write("<td>--</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>")
document.write("<p>Para aprobar el ramo de javaScript con nota "+notaAprobacion+", necesitas obtener un "+nota3jScript.toFixed(2)+" en la Nota 3.</p>")

//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</div>");//Aquí cerramos el div contenedor

