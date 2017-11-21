/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

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
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var iconoDesplegado = document.getElementById('iconoDesplegado');
iconoDesplegado.addEventListener('click', function(){
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	document.getElementById('subtitle').innerHTML='Ciudad de Mexico, 2017 1°Generación';
	/*DE JOHANNA: dejar como inline-flex así se ajusta parejo dentro del div ;D */
})

//evento de click al clickear segunda generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var desplegadoIcono = document.getElementById('desplegadoIcono');
desplegadoIcono.addEventListener('click', function(){
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	document.getElementById('subtitle').innerHTML='Ciudad de Mexico, 2017 2°Generación';

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
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	document.getElementById('subtitle').innerHTML='Arequipa, 2016 2°Generación';
})

//evento de click al clickear segunda generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var desplegadoIcon = document.getElementById('desplegadoIcon');
desplegadoIcon.addEventListener('click', function(){
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	document.getElementById('subtitle').innerHTML='Arequipa, 2017 1°Generación';

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
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	document.getElementById('subtitle').innerHTML='Lima, 2016 2°Generación';
})

//evento de click al clickear segunda generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var circleDesplegadoUno = document.getElementById('circleDesplegadoUno');
circleDesplegadoUno.addEventListener('click', function(){
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	document.getElementById('subtitle').innerHTML='Lima, 2017 1°Generación';

})

//evento de click al clickear tercera generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var circleDesplegadoDos = document.getElementById('circleDesplegadoDos');
circleDesplegadoDos.addEventListener('click', function(){
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	document.getElementById('subtitle').innerHTML='Lima, 2017 2°Generación';
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
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	document.getElementById('subtitle').innerHTML='Santiago, 2016 2°Generación';
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
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	document.getElementById('subtitle').innerHTML='Santiago, 2017 1°Generación';

})

//evento de click al clickear tercera generacion
var glob= document.getElementById('cont-global');
glob.style.display='none';
var indicadores = document.getElementById('indicadores');
indicadores.style.display='none';
var desplegadoCircleDos = document.getElementById('desplegadoCircleDos');
desplegadoCircleDos.addEventListener('click', function(){
	document.getElementById('cont-global').style.display='inline-block';
	document.getElementById('indicadores').style.display='inline-flex';
	document.getElementById('subtitle').innerHTML='Santiago, 2017 2°Generación';
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

//evento de click de estudiantes
var student = document.getElementById('students');
student.addEventListener('click', function(){
	document.getElementById('cont-global').style.display='none';
	document.getElementById('indicadores').style.display='none';
	document.getElementById('students').style.display='block';
})

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