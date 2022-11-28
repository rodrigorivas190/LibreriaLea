
alert ( "Bienvenid@ a la libreria interactiva Lea")
let cliente = prompt("Ingrese su nombre");
let socio =  prompt(`"Bienvenid@ ${cliente}, es socio? (si - no)"`);


if (socio.toLocaleLowerCase() == "si") {
    
    alert(" Usted tiene 25% descuento por ser socio");
    console.log("Ingrese numero de cliente");
    parseInt(prompt("Ingrese numero de cliente"));
    pagoMembresia();
    mostrarLibros();
} else {
    alert("No tiene descuento, debera abonar el importe total sin descuentos ");
    console.log("Necesitas ser socio para obtener ofertas");
    alert("Necesitas ser socio para obtener ofertas, complete la suscripcion");
    console.log("Queres ser socio?");
    pagoSuscripcion();  
    mostrarLibros();
}

function mostrarLibros() {
    let catalogo = prompt(`${cliente} ¿Que catalogo estas buscando? Novelas - Policiales - Accion - Romance - Historia - ficcion o presione Cancel para salir `); 

    switch (catalogo.toLocaleLowerCase()) {
    case "novelas":
         alert(` ${cliente} te recomendamos estas novelas :
         El novelista perplejo`);
         pagoCompra ();
     break;
     case "policiales":
         alert(` ${cliente} te recomendamos estos policiales :
         Post mortem + punto de impacto`);
         pagoCompra ();
         break;
     case "accion":
         alert(` ${cliente} somos expertos en el genero accion :
         Tenemos descuentos en rapido y furiosos saga completa`);
         pagoCompra ();
         break;
    case "romance":
        alert(` ${cliente} en romance somos especialistas :
        Crepusculo`);
        pagoCompra ();
        break;    
    case "historia":
        alert(` ${cliente} La historia nos apaciona :
        tenes excelentes ofertas en libros de historia
        Historias inesperadas de la historia argentina`);
        pagoCompra ();
        break;
    case "ficcion":
        alert(` ${cliente} Los mejores libros de ficcion:
        Viajeros de la noche`);
        pagoCompra();
        break;
    case "otras":
         alert(`${cliente} nuestro catalogo es muy amplio`);
         mostrarLibros();
         break;
     default:
         alert(`"Ingrese una categoria valida ej: novelas - ficcion - etc "`);
         mostrarLibros();
         break;
}  
}


function pagoCompra() {
    
let conulta = parseFloat(prompt("Valor del libro $500 - ingrese importe si desea comprarlo - sino precione Cancel"));
let valorLibro = 500

if(conulta >= valorLibro){
    alert(`Gracias ${cliente}, su pago fue aprobado, excelente compra!!!`);
    mostrarLibros ();
   }  else{

   alert("Algo salio mal, segui mirando nuestro catalogo");  
   mostrarLibros ();
}
}
function pagoSuscripcion() {
    

let sociodinero = Number(prompt(`"${cliente}, abone $1000 para ser socio, sino precione ok para continuar"`));
let pagaSocio = 1000;

if(sociodinero >= pagaSocio){
     alert(`${cliente}, excelente noticias ya eres socio con menbresia VIP`);
     mostrarLibros ();}
     else{
        alert("el importe no es correcto, te vas a perder los descuentos, te estaremos esperando para que seas socio");    
     }   

}

function pagoMembresia() {

let dinero = Number(prompt(`" ${cliente}, tu menbresia VIP se encuentra caducada, si deseas renovarla abona $300"`));
let deudaTotal = 300;
   
    if(dinero >= deudaTotal){
         alert(`Gracias ${cliente}, excelente noticias recuperaste tu menbresia VIP`);
         mostrarLibros ();
        }  else{
        alert("el pago no es correcto, vas a perder los importantes descuentos");    
     }   
}