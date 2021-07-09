//Definimos nuestras variables
var nombre = prompt("Ingresa un nombre: ")
var apellido = prompt("Ingresa un apellido: ")
var email = prompt("Ingresa un correo: ")

document.write("<div class='container'>");//Aquí creamos nuestro div contenedor
document.write("<h1>Creando Tabla HTML con JavaScript y Bootstrap</h1>")
document.write("<table class='table'>");//Aquí creamos nuestra tabla con Bootstrap
document.write("<thead class='bg-dark text-white'>");//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<tr>");//Con tr definimos las columnas de la tabla

//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>ID</th>");
document.write("<th scope='col'>Nombre</th>");
document.write("<th scope='col'>Apellido</th>");
document.write("<th scope='col'>Email</th>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado

document.write("</tr");//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");//Aquí cerramos el encabezado de nuestra tabla

//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>1</th>");
document.write("<td>"+nombre+"</td>");
document.write("<td>"+apellido+"</td>");
document.write("<td>"+email+"</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna

document.write("</table");
document.write("</div>");//Aquí cerramos el div contenedor

