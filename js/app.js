/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);

//menu parte oculto
var menuOculto = document.getElementById('menuOculto');
menuOculto.style.display = 'none';

//creo el evento de click de menu para que se despliegue
var menuDesplegado = document.getElementById('iconoDesplegado');
menuDesplegado.addEventListener('click', function(){
	document.getElementById('cont-global').style.display='none';
	document.getElementById('bienvenida').style.display = 'none';
	document.getElementById('actualizacion').style.display = 'none';
	document.getElementById('eventos').style.display = 'none';
	document.getElementById('indicadores').style.display = 'none';
	document.getElementById('calendario').style.display='none';
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

//evento de click al clickear primera generacion
var iconoDesplegado = document.getElementById('iconoDesplegado');
iconoDesplegado.addEventListener('click', function(){
})

//evento de click al clickear segunda generacion
var desplegadoIcono = document.getElementById('desplegadoIcono');
desplegadoIcono.addEventListener('click', function(){

})


//AREQUIPA
//evento de click sede arequipa despliega generaciones
document.getElementById('subEventoClick').style.display='none';
var eventoClick = document.getElementById('eventoClick');
eventoClick.addEventListener('click', function(){
	var subEventoClick = document.getElementById('subEventoClick');
	subEventoClick.style.display='inline-block';
})

//evento de click al clickear primera generacion
var iconDesplegado = document.getElementById('iconDesplegado');
iconDesplegado.addEventListener('click', function(){
})

//evento de click al clickear segunda generacion
var desplegadoIcon = document.getElementById('desplegadoIcon');
desplegadoIcon.addEventListener('click', function(){

})


//LIMA
//evento de click sede lima despliega generaciones
document.getElementById('subClickEvento').style.display='none';
var clickEvento = document.getElementById('clickEvento');
clickEvento.addEventListener('click', function(){
	var subClickEvento = document.getElementById('subClickEvento');
	subClickEvento.style.display='inline-block';
})

//evento de click al clickear primera generacion
var circleDesplegado = document.getElementById('circleDesplegado');
circleDesplegado.addEventListener('click', function(){
})

//evento de click al clickear segunda generacion
var circleDesplegadoUno = document.getElementById('circleDesplegadoUno');
circleDesplegadoUno.addEventListener('click', function(){

})

//evento de click al clickear tercera generacion
var circleDesplegadoDos = document.getElementById('circleDesplegadoDos');
circleDesplegadoDos.addEventListener('click', function(){
})


//santiago
document.getElementById('cont-global').style.display='none';
//document.getElementById('indicadores').style.display='none';
//evento de click de seleccion de sede santiago se despliega las generaciones
//debo arreglarla porque cuando vuelvo hacer click no se despliega
document.getElementById('subIconoClick').style.display= 'none';
var iconoClick = document.getElementById('iconoClick');
iconoClick.addEventListener('click', function(){
	var subIconoClick = document.getElementById('subIconoClick').style.display= 'inline-block';
})

//evento de click al clickear primera generacion
var desplegadoCircle = document.getElementById('desplegadoCircle');
desplegadoCircle.addEventListener('click', function(){
	document.getElementById('cont-global').style.display='inline-block';
    //title.style.display='block';
	var indicadores = document.getElementById('indicadores');
	indicadores.style.display='inline-block';
})

//evento de click al clickear segunda generacion
var desplegadoCircleUno = document.getElementById('desplegadoCircleUno');
desplegadoCircleUno.addEventListener('click', function(){

})

//evento de click al clickear tercera generacion
var desplegadoCircleDos = document.getElementById('desplegadoCircleDos');
desplegadoCircleDos.addEventListener('click', function(){
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
		calendar.classList.add("seeCalendar");
	} else {
		console.log("ocultar");
		calendar.classList.remove("seeCalendar");
		calendar.classList.add("hideCalendar");
	}
});
