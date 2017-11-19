/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
//var listita = document.getElementById('List');
//menu parte oculto
var menuOculto = document.getElementById('menuOculto');
menuOculto.style.display = 'none';

//creo el evento de click
var menuDesplegado = document.getElementById('iconoDesplegado');
menuDesplegado.addEventListener('click', function(){
	document.getElementById('bienvenida').style.display = 'none';
	document.getElementById('actualizacion').style.display = 'none';
	document.getElementById('eventos').style.display = 'none';
	document.getElementById('indicadores').style.display = 'none';
	var menuOculto = document.getElementById('menuOculto');
	menuOculto.style.display = 'block';
});


// funcion que muestra el demo-calendario
var btnCalendar = document.getElementById("date");

function showDate() {
	var calendar = document.getElementById('datePopUp');

	if (calendar.classList.contains("hideCalendar")) {
		calendar.classList.remove("hideCalendar");
		menu.classList.add("seeCalendar");
	} else {
		console.log("ocultar");
		calendar.classList.remove("seeCalendar");
		calendar.classList.add("hideCalendar");
	}
}
btnCalendar.addEventListener("click", showDate);