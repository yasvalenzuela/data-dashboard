/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);

//menu parte oculto
var menuOculto = document.getElementById('menuOculto');
menuOculto.style.display = 'none';

//creo el evento de click de menu
var menuDesplegado = document.getElementById('iconoDesplegado');
menuDesplegado.addEventListener('click', function(){
	document.getElementById('bienvenida').style.display = 'none';
	document.getElementById('actualizacion').style.display = 'none';
	document.getElementById('eventos').style.display = 'none';
	document.getElementById('indicadores').style.display = 'none';
	var menuOculto = document.getElementById('menuOculto');
	menuOculto.style.display = 'block';
});



//MEXICO
//evento de click de sede mexico despliega generaciones
document.getElementById('subIcono').style.display='none';
var clickIcono = document.getElementById('clickIcono');
clickIcono.addEventListener('click', function(){
	var subIcono = document.getElementById('subIcono');
	subIcono.style.display='inline-block';
})

//AREQUIPA
//evento de click sede arequipa despliega generaciones
document.getElementById('subEventoClick').style.display='none';
var eventoClick = document.getElementById('eventoClick');
eventoClick.addEventListener('click', function(){
	var subEventoClick = document.getElementById('subEventoClick');
	subEventoClick.style.display='inline-block';
})

//LIMA
//evento de click sede lima despliega generaciones
document.getElementById('subClickEvento').style.display='none';
var clickEvento = document.getElementById('clickEvento');
clickEvento.addEventListener('click', function(){
	var subClickEvento = document.getElementById('subClickEvento');
	subClickEvento.style.display='inline-block';
})


//santiago
//evento de click de seleccion de sede santiago se despliega las generaciones
//debo arreglarla porque cuando vuelvo hacer click no se despliega
document.getElementById('subIconoClick').style.display= 'none';
var iconoClick = document.getElementById('iconoClick');
iconoClick.addEventListener('click', function(){
	var subIconoClick = document.getElementById('subIconoClick').style.display= 'inline-block';
})

//evento de click al seleccionar primera generacion
//evento de click al seleccionar segunda generacion
//evento de click al seleccionar tercera generacion


//HEAD
// funcion que muestra el demo-calendario
//document.getElementById('datePopUp').style.display='none';
var btnCalendar = document.getElementById("date");
btnCalendar.addEventListener("click", function() {
	var calendar = document.getElementById('datePopUp');
	if (calendar.classList.contains("hideCalendar")) {
		calendar.classList.remove("hideCalendar");
		menu.classList.add("seeCalendar");
	} else {
		console.log("ocultar");
		calendar.classList.remove("seeCalendar");
		calendar.classList.add("hideCalendar");
	}
});
