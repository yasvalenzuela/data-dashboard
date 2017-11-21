/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

//funciones generales para obtener los datos requeridos
//funcion para calcular las estudiantes inscritas por generacion
/*
function inscritas(){
	var studentsTotal = generacion.students.length;
	return total;
}

//funcion para calcular % desercion
function activas(){
	var activasTotal = 0;
	var porcentajeDesercion = studentsTotal - activasTotal;
	for (var i =0; i < generacion.students.length; i++) {
		if(generacion.students[i].active ===true){
			activasTotal = activasTotal+1
		}
	}
	return porcentajeDesercion;
}

//funcion para calcular cantidad de alumnas que superan la meta tech
function metaTech (){
	var meta = 0;
	for(var i=0; i <generacion.students.length; i++){
		if(generacion.students[i].score.tech >=1260){
			meta = meta +1
		}
	}
	return meta;
}

//funcion para calcular %

//funcion para calcular cantidad de alumnas que superan la meta HSE
function metaHse (){
	var hseMeta = 0;
	for(var i=0; i <generacion.students.length; i++){
		if(generacion.students[i].score.tech >=840){
			hseMeta = hseMeta +1
		}
	}
	return hseMeta;
}

//funcion nps
function nps(){
	var promoter = 0;
	var passive = 0;
	var detractors = 0;
	for(var i=0; i<generacion.ratings.length; i++){
		if(generacion.ratings[i].nps.promoter){
			promoter=promoter+1
		}if(generacion.ratings[i].nps.passive){
			passive=passive+1
		
		}if(generacion.ratings[i].nps.detractors){
			detractors=detractors+1
		}	

	}
	return (promoter - detractors);
}

//% de estudiantes satisfechas
function satisfaccion(){
	var satisfaccionTotal = supera + cumple;
	var supera = 0;
	var cumple =0;
	for(var i=0; i<generacion.ratings.length; i++){
		if(generacion.ratings[i].student.supera){
			supera=supera+1
		} if(generacion.ratings[i].student.cumple){
			cumple=cumple+1
		}
	} 
	return ((satisfaccionTotal/generacion.ratings.length)*100)/100;
}

//puntuacion promedio de profesores
function profesores(){
	var teacher = 0;
	for(var i=0; i<generacion.ratings.length; i++){
		if(generacion.ratings[i].teacher){
			teacher=teacher+1;
		}
	}
	return ((teacher/generacion.ratings.length)*100)/100;
}
//puntuacion promedio de jedi
function jediMaster(){
	var jedi = 0;
	for(var i=0; i<generacion.ratings.length; i++){
		if(generacion.ratings[i].jedi){
			jedi=jedi+1;
		}
	}
	return ((jedi/generacion.ratings.length)*100)/100;
}
*/

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

//contenedor parte oculto
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';

//MEXICO
//evento de click de sede mexico despliega generaciones
document.getElementById('subIcono').style.display='none';
var clickIcono = document.getElementById('clickIcono');
clickIcono.addEventListener('click', function(){
	var subIcono = document.getElementById('subIcono');
	subIcono.style.display='inline-block';
})

//evento de click al clickear primera generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var iconoDesplegado = document.getElementById('iconoDesplegado');
iconoDesplegado.addEventListener('click', function(){
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	/*DE JOHANNA: dejar como inline-flex así se ajusta parejo dentro del div ;D */
	/*
	var cdmxUno = data.CDMX['2017-1'];
	var cdmxInscritas20171 = inscritas(cdmxUno);
	var cdmxActivas20171 = activas(cdmxUno);
	var cdmxNps20171 = nps(cdmxUno);
	var cdmxCantidadTech20171 = metaTech(cdmxUno);
	var cdmxCantidadHse20171 = metaHse(cdmxUno);
	var cdmxSatisfaccion20171 = satisfaccion(cdmxUno);
	var cdmxProfesores20171 = profesores(cdmxUno);
	var cdmxJedi20171 = jediMaster(cdmxUno);
    console.log(cdmxUno);
	*/
})

//evento de click al clickear segunda generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
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
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var iconDesplegado = document.getElementById('iconDesplegado');
iconDesplegado.addEventListener('click', function(){
})

//evento de click al clickear segunda generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
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
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var circleDesplegado = document.getElementById('circleDesplegado');
circleDesplegado.addEventListener('click', function(){
})

//evento de click al clickear segunda generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var circleDesplegadoUno = document.getElementById('circleDesplegadoUno');
circleDesplegadoUno.addEventListener('click', function(){

})

//evento de click al clickear tercera generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var circleDesplegadoDos = document.getElementById('circleDesplegadoDos');
circleDesplegadoDos.addEventListener('click', function(){
})


//santiago

//document.getElementById('indicadores').style.display='none';
//evento de click de seleccion de sede santiago se despliega las generaciones
//debo arreglarla porque cuando vuelvo hacer click no se despliega
document.getElementById('subIconoClick').style.display= 'none';
var iconoClick = document.getElementById('iconoClick');
iconoClick.addEventListener('click', function(){
	var subIconoClick = document.getElementById('subIconoClick').style.display= 'inline-block';
})

//evento de click al clickear primera generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var desplegadoCircle = document.getElementById('desplegadoCircle');
desplegadoCircle.addEventListener('click', function(){
	//document.getElementById('cont-global').style.display='inline-block';
    //title.style.display='block';
	var indicadores = document.getElementById('indicadores');
	indicadores.style.display='inline-flex';
	//var indicadores = document.getElementById('indicadores');
	//indicadores.style.display='inline-block';
	//var enrollment = document.getElementById('enrollment');
	/*
	for(var i=0; i<data.SCL['2016-2'].students.length; i++){
		console.log(data.SCL['2016-2'].students.active.length);
		var parrafo = document.createElement('p');
		var texto = document.createTextNode('');
		parrafo.appendChild(texto);
		enrollment.appendChild(parrafo);
	}
	*/

	/*
	for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	console.log(data.SCL['2016-2'].students[i].name);
	var parrafo = document.createElement('p');
	var nodoParrafo = document.createTextNode('La estudiante número ' + [i+1] + ' es: ' + data.SCL['2016-2'].students[i].name);
		parrafo.appendChild(nodoParrafo);
		container.appendChild(parrafo);
}

	*/
})

//evento de click al clickear segunda generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var desplegadoCircleUno = document.getElementById('desplegadoCircleUno');
desplegadoCircleUno.addEventListener('click', function(){

})

//evento de click al clickear tercera generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var desplegadoCircleDos = document.getElementById('desplegadoCircleDos');
desplegadoCircleDos.addEventListener('click', function(){
})

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
